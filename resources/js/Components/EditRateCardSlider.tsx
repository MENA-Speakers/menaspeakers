import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from '@/Components/ui/sheet';
import React from 'react';
import 'react-quill/dist/quill.snow.css';
import {Input} from "@/Components/ui/input";
import {Textarea} from "@/Components/ui/textarea";
import {RateCardType} from "@/types/rate-card";
import {useFormik} from "formik";
import {Label} from "@/Components/ui/label";
import ReactQuill from "react-quill";
import * as Yup from "yup";
import axios from "axios";
import {useDropzone} from "react-dropzone";
import {Popover, PopoverContent, PopoverTrigger} from "@/Components/ui/popover";
import {Check, ChevronsUpDown} from "lucide-react";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem} from "@/Components/ui/command";
import {cn} from "@/Utils/cn";
import localCountries from "@/Utils/countries";
import {Button} from "@/Components/ui/button";
import AddVideoLink from "@/Components/AddVideoLink";
import {ScrollArea} from "@/Components/ui/scroll-area";

interface EditRateCardSliderProps {
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void,
  rateCard: RateCardType,
  updateCard: (rateCard: RateCardType) => void
}
type PreviewFile = File & { preview: string };
function EditRateCardSlider({isOpen, setIsOpen, rateCard, updateCard}: EditRateCardSliderProps) {

  const countries = localCountries

  const [openCountry, setOpenCountry] = React.useState(false)

  const [videos, setVideos] = React.useState(rateCard.videos)

  const [openCurrency, setOpenCurrency] = React.useState(false)
  const [addVideo, setAddVideo] = React.useState(false)
  const handleVideoAdded = (data: any) => {
    setVideos(data.videos)
    updateCard(data)
    setAddVideo(false)
  }

  const formik = useFormik({
    initialValues: {
      title: rateCard.title || '',
      fee: rateCard.fee || 0,
      summary: rateCard.summary || '',
      currency: rateCard.currency ,
      location: rateCard.location || '',
    },

    validationSchema: Yup.object( {
      title: Yup.string()
        .required( 'Title is required' ),

      summary: Yup.string()
        .required( 'Highlights is required' ),
    } ),

    onSubmit: values => {
        axios.post(route('admin.proposals.rate-cards.update', {
          rateCard: rateCard.hash_id,
          proposal: rateCard.proposal_id,
        }), values, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        } ).then(
          response => {
            setIsOpen(false)
            updateCard(response.data)
          })
    },
  });

  const currencies = [
    {name: 'USD', code: 'USD'},
    {name: 'EUR', code: 'EUR'},
    {name: 'AED', code: 'AED'},
    {name: 'SAR', code: 'SAR'},
    {name: 'GBP', code: 'GBP'},
    {name: 'AUD', code: 'AUD'},
    {name: 'CAD', code: 'CAD'},
    {name: 'CHF', code: 'CHF'},
    {name: 'CNY', code: 'CNY'},
    {name: 'SEK', code: 'SEK'},
  ]

  const [galleryPreview, setGalleryPreview] = React.useState<PreviewFile[]>([]);

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
  } = useDropzone({
    maxFiles: 6, // Increase maxFiles to allow multiple files
    accept: 'image/*', // Remove the empty array
    onDrop: (acceptedFiles: File[]) => {
      // Map through the acceptedFiles to create the previews
      setGalleryPreview(
        acceptedFiles.map(file => ({
          ...file,
          preview: URL.createObjectURL(file),
        }))
      );
      formik.setFieldValue('gallery', acceptedFiles);
    },
  });

  const deleteVideo = (video: VideoLinks) => {
    axios.delete(route('admin.proposals.rate-cards.videos.delete', {
      rateCard: rateCard.hash_id,
      video: video.id,
    })).then((response) => {
      setVideos(response.data.videos)
      updateCard(response.data)
    })
  }


  return (
    <div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}  >
        <SheetTrigger>
          <Button variant={'outline'} size={'sm'} className={'text-sm'}> Edit</Button>
        </SheetTrigger>

        <SheetContent className={'md:w-[60%] h-screen flex flex-col'} side={'left'}>
          <div>
            <SheetHeader className={'px-6 pt-6 flex justify-between'}>
              <SheetTitle>Edit Rate Card - {rateCard.title}</SheetTitle>
              <div>
                <div className="mt-1 flex justify-end">
                  <Button onClick={() => setAddVideo(!addVideo)} variant={'outline'} size={'sm'}>Add Video</Button>
                </div>
              </div>
            </SheetHeader>
          </div>


          {
            addVideo && (
             <div className="px-8">
               <AddVideoLink
                 handleLinkAdded={handleVideoAdded}
                 id={rateCard.hash_id}/>
             </div>
            )
          }


          <form onSubmit={formik.handleSubmit} className="flex flex-1 overflow-y-auto flex-col">

            <div className="flex-1 overflow-y-auto py-4 px-6 space-y-6 h-full  items-center">
            <ScrollArea>
                <Label htmlFor="fee" className="block text-sm font-medium text-gray-700">Fees</Label>
                <Input
                  value={formik.values.fee}
                  name={'fee'}
                  onChange={formik.handleChange}
                  type={'number'}
                  placeholder={''}
                />

              </ScrollArea>
              <div>
                <Label htmlFor="summary" className="block text-sm font-medium mb-1 text-gray-700">Highlights</Label>
                <Textarea
                  value={formik.values.summary}
                  name={'summary'}
                  rows={10}
                  onChange={formik.handleChange}
                  placeholder={''}
                />

              </div>

              <div>
                <Label htmlFor="summary" className="block text-sm font-medium mb-1 text-gray-700">Currency</Label>

                <Popover open={openCurrency} onOpenChange={setOpenCurrency}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-full justify-between"
                    >
                      {formik.values.currency
                        ? currencies.find((currency) => currency.name === formik.values.currency)?.name
                        : "Select Currency..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput placeholder="Search currency..."/>
                      <CommandEmpty>No currency found.</CommandEmpty>
                      <CommandGroup>
                        {currencies.map((currency) => (
                          <CommandItem
                            key={currency.code}
                            value={currency.code}
                            onSelect={() => {
                              formik.setFieldValue("currency", currency.name)
                              setOpenCurrency(false)
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                formik.values.currency === currency.name ? "opacity-100" : "opacity-0"
                              )}
                            />
                            {currency.name}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>

              </div>

              <div>
                <Label htmlFor="summary" className="block text-sm font-medium mb-1 text-gray-700">Location</Label>

                <div className="mt-1">
                  <Popover open={openCountry} onOpenChange={setOpenCountry}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full justify-between"
                      >
                        {formik.values.location
                          ? countries.find((country) => country.name === formik.values.location)?.name
                          : "Select Country..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <Command>
                        <CommandInput placeholder="Search country..."/>
                        <CommandEmpty>No country found.</CommandEmpty>
                        <CommandGroup>
                          {countries.map((country) => (
                            <CommandItem
                              key={country.code}
                              value={country.name}
                              onSelect={() => {
                                formik.setFieldValue("location", country.name)
                                setOpenCountry(false)
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  formik.values.location === country.name ? "opacity-100" : "opacity-0"
                                )}
                              />
                              {country.name}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>

              </div>
              <div className="py-4 space-y-2 ">
                <h4 className="font-semibold">Videos</h4>
                {
                  videos?.map((video, index) => (
                    <div key={index} className={'flex justify-between items-center'}>
                      <a href={video.link} className={'text-blue-500'}target={'_blank'}>{video.link}</a>
                      <Button className={'ml-3'} onClick={() => deleteVideo(video)} variant={'destructive'} size={'sm'}>Delete</Button>
                    </div>
                  ))
                }

              </div>
            </div>


            <div className="flex px-6 pb-12 justify-start">
              <Button type={'submit'}>Update</Button>

            </div>

          </form>


        </SheetContent>
      </Sheet>
    </div>
  );
}

export default EditRateCardSlider;
