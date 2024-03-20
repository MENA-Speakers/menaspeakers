import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from '@/Components/ui/sheet';
import React from 'react';
import 'react-quill/dist/quill.snow.css';
import {Input} from "@/Components/ui/input";
import {Button} from "@/Components/ui/button";
import {Textarea} from "@/Components/ui/textarea";
import {RateCardType} from "@/types/rate-card";
import {useFormik} from "formik";
import {Label} from "@/Components/ui/label";
import ReactQuill from "react-quill";
import * as Yup from "yup";
import axios from "axios";
import {useDropzone} from "react-dropzone";

interface EditRateCardSliderProps {
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void,
  rateCard: RateCardType,
  updateCard: (rateCard: RateCardType) => void
}
type PreviewFile = File & { preview: string };
function EditRateCardSlider({isOpen, setIsOpen, rateCard, updateCard}: EditRateCardSliderProps) {

  const formik = useFormik({
    initialValues: {
      title: rateCard.title || '',
      fee: rateCard.fee,
      summary: rateCard.summary,
      currency: rateCard.currency,
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


  return (
    <div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button variant={'outline'} size={'sm'} className={'text-sm'}> Edit</Button>
        </SheetTrigger>

        <SheetContent className={'md:w-[45%] h-screen flex flex-col'}>
          <div>
            <SheetHeader className={'p-6'}>
              <SheetTitle>Edit Rate Card - {rateCard.title}</SheetTitle>
            </SheetHeader>
          </div>
          <form onSubmit={formik.handleSubmit} className="py-4 px-6 space-y-6 h-full  items-center">

            <div>
              <Label htmlFor="fee" className="block text-sm font-medium text-gray-700">Fees</Label>
              <Input
                value={formik.values.fee}
                name={'fee'}
                onChange={formik.handleChange}
                type={'number'}
                placeholder={''}
              />

            </div>
            <div>
              <Label htmlFor="summary" className="block text-sm font-medium mb-1 text-gray-700">Highlights</Label>
              <Textarea
                value={formik.values.summary}
                name={'summary'}
                onChange={formik.handleChange}
                placeholder={''}
              />

            </div>

            <div>
              <Label htmlFor="summary" className="block text-sm font-medium mb-1 text-gray-700">Currency</Label>

              <Input
                value={formik.values.currency}
                name={'currency'}
                onChange={formik.handleChange}
                placeholder={''}/>

            </div>


            {/*<div>*/}
            {/*  <div className='w-full  '>*/}
            {/*    <Label htmlFor={'file'}>Featured Image</Label>*/}
            {/*    <div {...getRootProps({className: 'border-dashed border-2 rounded-lg mt-2 py-4 px-4'})}>*/}
            {/*      <input {...getInputProps()} />*/}
            {/*      <p className={'text-sm'}>Drag 'n' Cover Image, or click to select files</p>*/}
            {/*    </div>*/}

            {/*    /!*    display preview *!/*/}
            {/*    <div className={'flex mt-4'}>*/}
            {/*      {*/}
            {/*        galleryPreview.map((file: any, index: number) => {*/}
            {/*          return (*/}
            {/*            <div key={index} className={'w-24 h-24 mr-4'}>*/}
            {/*              <img src={file.preview} alt=""/>*/}
            {/*            </div>*/}
            {/*          )*/}
            {/*        })*/}
            {/*      }*/}

            {/*    </div>*/}
            {/*</div>*/}
            {/*</div>*/}
            <div className="flex justify-end">
              <Button type={'submit'}>Update</Button>
            </div>

          </form>
          <div className=" gap-4 h-full">

          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default EditRateCardSlider;
