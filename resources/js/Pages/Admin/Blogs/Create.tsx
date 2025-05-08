import React from "react";
import { Head, router } from "@inertiajs/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import PrimaryButton from "@/Components/PrimaryButton";
import AdminLayout from "@/Layouts/AdminLayout";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Label } from "@/Components/ui/label";
import { BlogType } from "@/types/blog-type";
import Select from "react-select";

/**
 * Represents an option type used in selections or dropdown lists.
 *
 * @interface optionType
 * @property {string} value - The underlying value associated with the option.
 * @property {string} label - The display text for the option visible to users.
 */
interface optionType {
  value: string;
  label: string;
}

/**
 * Represents the properties required to create a blog.
 *
 * @interface createBlogProps
 * @property {BlogType} blog - The blog object containing the main content and details.
 * @property {optionType[]} categories - Array of available category options for the blog.
 * @property {optionType[]} selectedCategories - Array of categories currently selected for the blog.
 * @property {optionType[]} authors - Array of available author options for the blog.
 * @property {optionType} author - The author currently selected for the blog.
 */
interface createBlogProps {
  blog: BlogType;
  categories: optionType[];
  selectedCategories: optionType[];
  authors: optionType[];
  author: optionType;
}

/**
 * Renders the blog creation form, initializes the form submission
 * functionality with validation rules and handles all related processes.
 *
 * @param {Object} props - The properties for the Create function.
 * @param {Object} props.blog - The current blog object being edited. It may contain pre-existing values like title, meta title, keywords, content, etc.
 * @param {Array} props.categories - The list of categories available for selection in the form.
 * @param {Array} props.selectedCategories - The currently selected categories for the blog.
 * @param {Array} props.authors - The list of author options available for selection.
 * @param {Object} props.author - The currently selected author information.
 * @return {JSX.Element} Returns the JSX element for rendering the blog form.
 */
function Create({
  blog,
  categories,
  selectedCategories,
  authors,
  author,
}: createBlogProps) {
  // Initialize the formik object with initial values and validation schema
  const formik = useFormik({
    initialValues: {
      // The title of the blog, defaulting to an empty string if not provided
      title: blog?.title ? blog.title : "",
      // The meta title of the blog, defaulting to an empty string if not provided
      meta_title: blog?.meta_title ? blog.meta_title : "",
      // The keywords for the blog, defaulting to a predefined string if not provided
      keywords: blog?.keywords
        ? blog.keywords
        : "Public speaking, Communication skills, Keynote speaker, Public speaking trainer, Serial entrepreneur, Forbes contributor, Career advancement, Personal branding, Overcoming fear of public speaking, Effective communication, Impactful speeches",
      // Whether the blog is featured, defaulting to an empty string if not provided
      featured: blog?.featured ? blog.featured : "",
      // The content of the blog, defaulting to an empty string if not provided
      content: blog?.content ? blog.content : "",
      // The excerpt of the blog, defaulting to an empty string if not provided
      excerpt: blog?.excerpt ? blog.excerpt : "",
      // The image associated with the blog, defaulting to an empty string if not provided
      image: "",
      // The categories associated with the blog, defaulting to an empty array if not provided
      categories: blog?.categories ? blog.categories : [],
      // The author ID associated with the blog, defaulting to an empty string if not provided
      authorId: blog?.authorId ? blog.authorId : "",
    },

    validationSchema: Yup.object({
      title: Yup.string()
        .max(255, "Must be 255 characters or less")
        .required("Required"),
      meta_title: Yup.string().max(75, "Must be 75 characters or less"),
      keywords: Yup.string()
        .max(255, "Must be 255 characters or less")
        .required("Required"),
      content: Yup.string()
        .min(50, "Must be 50 characters or More")
        .required("Required"),
      excerpt: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      // Determine the URL for the POST request based on whether a blog exists
      let postUrl = route("admin.blogs.store");
      if (blog) {
        postUrl = route("admin.blogs.update", blog.slug);
      }

      // Make a POST request to the determined URL with the form values
      axios
        .post(postUrl, values, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          // Redirect to the blogs index route upon successful submission
          router.visit(route("admin.blogs.index"));
          formik.setSubmitting(false);
        })
        .catch((error) => {
          // Set formik errors if the response status is 422 (Unprocessable Entity)
          if (error.response.status === 422) {
            formik.setErrors(error.response.data.errors);
          }
          formik.setSubmitting(false);
        });
    },
  });

  const [imagePreview, setImagePreview] = React.useState(
    blog?.image ? blog.image : null
  );

  const {
    acceptedFiles,
    getRootProps: getRootProps,
    getInputProps: getInputProps,
  } = useDropzone({
    maxFiles: 1,
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setImagePreview(URL.createObjectURL(acceptedFiles[0]));
      formik.setFieldValue("image", acceptedFiles[0]);
    },
  });

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  return (
    <AdminLayout>
      <Head title="New Blog" />

      <div className="py-4">
        <div className="max-w-7xl mx-auto sm:p-6 lg:p-4 bg-white overflow-hidden">
          <div className={"py-4"}>
            <h1 className="text-2xl text-gray-800">New Blog </h1>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className=" max-w-4xl space-y-8 mx-auto py-8 px-8"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <div className="mt-1">
                <Input
                  type="text"
                  name="title"
                  id="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Title"
                />
              </div>

              {formik.touched.title && formik.errors.title ? (
                <div className="text-red-500 text-xs italic">
                  {formik.errors.title}
                </div>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="excerpt"
                className="block text-sm font-medium text-gray-700"
              >
                Keywords{" "}
              </label>
              <div className="mt-1">
                <Textarea
                  rows={2}
                  name="keywords"
                  value={formik.values.keywords}
                  onChange={formik.handleChange}
                  id="keywords"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                ></Textarea>
              </div>

              {formik.touched.keywords && formik.errors.keywords ? (
                <div className="text-red-500 text-xs italic">
                  {formik.errors.keywords}
                </div>
              ) : null}
            </div>

            <div className="w-full ">
              <Label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Categories
              </Label>
              <Select
                defaultValue={selectedCategories}
                onChange={(e) => formik.setFieldValue("categories", e)}
                isMulti
                placeholder={"Select Categories"}
                name="category"
                options={categories}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>

            <div className="w-full ">
              <Label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Author
              </Label>
              <Select
                defaultValue={author}
                value={authors.find(
                  (author) => author.value === formik.values.authorId
                )}
                onChange={(e) => formik.setFieldValue("authorId", e?.value)}
                name="authorId"
                placeholder={"Select Author"}
                options={authors}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>

            <div>
              <label
                htmlFor="excerpt"
                className="block text-sm font-medium text-gray-700"
              >
                Excerpt{" "}
              </label>
              <div className="mt-1">
                <Textarea
                  rows={2}
                  name="excerpt"
                  value={formik.values.excerpt}
                  onChange={formik.handleChange}
                  id="excerpt"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                ></Textarea>
              </div>

              {formik.touched.excerpt && formik.errors.excerpt ? (
                <div className="text-red-500 text-xs italic">
                  {formik.errors.excerpt}
                </div>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700"
              >
                Content
              </label>

              <div className="mt-1">
                <ReactQuill
                  theme="snow"
                  value={formik.values.content}
                  onChange={(e) => formik.setFieldValue("content", e)}
                  modules={modules}
                />
              </div>

              {formik.touched.content && formik.errors.content ? (
                <div className="m-0.5 text-sm text-red-500">
                  {formik.errors.content}
                </div>
              ) : null}
            </div>

            <div>
              <div className="w-full lg:w-1/2 ">
                <Label htmlFor={"file"}>Featured Image</Label>
                <div
                  {...getRootProps({
                    className:
                      "border-dashed border-2 rounded-lg mt-2 py-4 px-4",
                  })}
                >
                  <input {...getInputProps()} />
                  <p className={"text-sm"}>
                    Drag 'n' Cover Image, or click to select files
                  </p>
                </div>

                {/*    display preview */}
                {imagePreview && (
                  <div className="mx-auto mt-3">
                    <img
                      src={imagePreview}
                      className={"h-40 w-40 object-cover"}
                      alt=""
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="relative flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="featured"
                  aria-describedby="featured"
                  name="featured"
                  value="1"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="featured" className="font-medium text-gray-700">
                  Featured
                </label>
              </div>
            </div>
            <div>
              <div className="mt-1 flex justify-end">
                <PrimaryButton disabled={formik.isSubmitting} type="submit">
                  {blog ? "Update Blog" : "Add Blog"}
                </PrimaryButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Create;
