/* eslint-disable no-unused-vars */

import { useState } from "react";
import Select from "react-select"; // Import react-select
import { useForm, useFieldArray, Controller } from "react-hook-form";
// import { useForm } from "react-hook-form";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
import Swal from "sweetalert2";

const AdminHome = () => {
  const [images, setImages] = useState([]);
  const [tags, setTags] = useState([]); // State for tags
  const handleImageChange = (e) => {
    const newImages = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const {
    reset,
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  // Options for tags
  const tagOptions = [
    { value: "React", label: "React" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "TailwindCSS", label: "TailwindCSS" },
    { value: "Node.js", label: "Node.js" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Express", label: "Express" },
    { value: "TypeScript", label: "TypeScript" },
  ];

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = async (data) => {
    const { tags: tagData, ...remaining } = data;
    // console.log(remaining);
    const newTagArray = tags.map((item) => item.value);
    // console.log(newTagArray);

    const imageFile = images[0];

    // console.log(data);

    if (imageFile) {
      const formData = new FormData();
      formData.append("image", imageFile);

      fetch(img_hosting_url, {
        method: "post",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgResponse) => {
          if (imgResponse.success) {
            const imgURL = imgResponse.data.display_url;
            // console.log(imgURL);
            const newData = {
              image: imgURL,
              ...remaining,
              technology: newTagArray,
            };
            console.log(newData);

            // // fetch("http://localhost:5000/api/user/create-user", {
            fetch(
              "https://jewelrana-portfolio-server.vercel.app/api/create-project",
              {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(newData),
              }
            )
              .then((res) => res.json())
              .then((data) => {
                // setLoading(false); // Set loading to false when done
                if (data?.success === true) {
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Project added successfully!",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  reset();
                  // setState(true);
                }
              })
              .catch((error) => {
                // setLoading(false); // Set loading to false on error
                console.log(error);
                Swal.fire({
                  title: "Error!",
                  text: "Do you want to continue",
                  icon: "error",
                  confirmButtonText: "OK",
                });
              });
          }
        });
    }
  };

  return (
    <div>
      <div className=" ">
        {/* <Heading heading={"Add New Product"}></Heading> */}

        <div className=" border w-full bg-gray-200 p-4 mt-8">
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* product name  */}
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2  ml-1">
                  Project Name :
                </label>
                <input
                  type="text"
                  className="  border w-full px-3 py-2 rounded-lg text-black bg-white"
                  {...register("projectName", { required: true })}
                  placeholder="Project Name"
                />
                {errors.projectName && (
                  <span className="mt-4 text-red-600">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2  ml-1">
                  Live Link :
                </label>
                <input
                  type="text"
                  className="  border w-full px-3 py-2 rounded-lg text-black bg-white"
                  {...register("liveClientLink", { required: true })}
                  placeholder="Live Link"
                />
                {errors.liveClientLink && (
                  <span className="mt-4 text-red-600">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="name" className="block mb-2  ml-1">
                  Live Server Link :
                </label>
                <input
                  type="text"
                  className="  border w-full px-3 py-2 rounded-lg text-black bg-white"
                  {...register("liveServerLink",)}
                  placeholder="Live server Link"
                />
               
              </div>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2  ml-1">
                  Github client Link :
                </label>
                <input
                  type="text"
                  className="  border w-full px-3 py-2 rounded-lg text-black bg-white"
                  {...register("githubClient", { required: true })}
                  placeholder="   Github client Link"
                />
                {errors.githubClient && (
                  <span className="mt-4 text-red-600">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2  ml-1">
                  Github server Link :
                </label>
                <input
                  type="text"
                  className="  border w-full px-3 py-2 rounded-lg text-black bg-white"
                  {...register("githubServer")}
                  placeholder="   Github server Link"
                />
               
              </div>

              {/* price  */}

              {/* category  */}
              <div>
                <div className="mb-6 w-full">
                  <label htmlFor="name" className="block mb-2  ml-1">
                    Category :
                  </label>
                  <select
                    className="  border w-full px-3 py-2 rounded-lg text-black bg-white "
                    {...register("category")}
                  >
                    <option value=""> Category</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend"> Backend </option>
                    <option value="MERN"> MERN </option>

                    {errors.category && (
                      <span className="mt-4 text-red-600">
                        This field is required
                      </span>
                    )}
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="tags" className="block mb-2  ml-1">
                    Tags:
                  </label>
                  <Controller
                    name="tags"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        isMulti
                        options={tagOptions}
                        value={tags}
                        onChange={(selectedTags) => setTags(selectedTags)}
                        className="text-black"
                      />
                    )}
                  />
                </div>

                {/* //////////////// */}

                {/* Images */}
                <div>
                  <hr className="border-white border-2" />
                  <h1 className="text-xl italic font-bold mt-8 mb-4">Images</h1>
                </div>

                <div className="mb-4">
                  <label htmlFor="images" className="block mb-2 ml-1">
                    Upload Images:
                  </label>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageChange}
                    className="p-2 border rounded"
                  />
                  {images.length > 0 && (
                    <div className="mt-2 grid grid-cols-2 md:grid-cols-5 gap-2">
                      {images.map((image, index) => (
                        <div key={index} className="relative">
                          <img
                            src={URL.createObjectURL(image)}
                            alt={`preview-${index}`}
                            className="h-32 w-32 object-cover rounded-full"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setImages(
                                images.filter(
                                  (_, imgIndex) => imgIndex !== index
                                )
                              )
                            }
                            title="Remove Image"
                            className="absolute top-1 m-1 bg-red-600 text-white rounded-full px-2 py-1"
                          >
                            X
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <input
                  className="w-full bg-blue-600 text-white py-2 text-md transition-all hover:bg-blue-500 cursor-pointer hover:transition-all hover:duration-300 ease-in-out transform"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
