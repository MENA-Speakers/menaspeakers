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
interface AuthorType {
  id: number;
  full_name: string;
  slug: string;
  image?: string;
}

interface createBlogProps {
  blog: BlogType;
  categories: optionType[];
  selectedCategories: optionType[];
  authors: AuthorType[]; // Changed this to match the actual author type
  author: AuthorType | null;
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
      title: blog?.title || "",
      content: blog?.content || "",
      excerpt: blog?.excerpt || "",
      featured: blog?.featured || false,
      author: blog?.author
        ? {
            value: blog.author.id.toString(), // Convert to string if needed
            label: blog.author.full_name,
          }
        : null,
      categories:
        blog?.categories?.map((category) => ({
          value: category.id.toString(), // Convert to string if needed
          label: category.name,
        })) || [],
      image: null,
    },

    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      content: Yup.string().required("Content is required"),
      excerpt: Yup.string().required("Excerpt is required"),
      author: Yup.object().nullable(),
      categories: Yup.array(),
      image: Yup.mixed(),
    }),

    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("content", values.content);
      formData.append("excerpt", values.excerpt);
      formData.append("featured", values.featured ? "1" : "0");

      if (values.author) {
        formData.append("author_id", values.author.value); // Changed this line
      }

      if (values.categories) {
        values.categories.forEach((category, index) => {
          formData.append(`categories[${index}][value]`, category.value);
          formData.append(`categories[${index}][label]`, category.label);
        });
      }

      if (values.image) {
        formData.append("image", values.image);
      }

      const isEditing = !!blog?.id;
      const url = isEditing
        ? route("admin.blogs.update", blog.slug)
        : route("admin.blogs.store");

      if (isEditing) {
        formData.append("_method", "PUT");
      }

      axios
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          router.visit(route("admin.blogs.index"));
          formik.setSubmitting(false);
        })
        .catch((error) => {
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
      <Head title={blog ? "Edit Blog" : "New Blog"} />

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

            <div className="w-full">
              <Label
                htmlFor="author"
                className="block text-sm font-medium text-gray-700"
              >
                Author
              </Label>
              <Select
                value={formik.values.author}
                onChange={(option) => formik.setFieldValue("author", option)}
                name="author"
                placeholder={"Select Author"}
                options={authors.map((author) => ({
                  value: author.id.toString(), // Convert to string if needed
                  label: author.full_name,
                }))}
                className="basic-select"
                classNamePrefix="select"
                isClearable={true} // Allow clearing the selection
              />
              {formik.touched.author && formik.errors.author && (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors.author as string}
                </div>
              )}
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
