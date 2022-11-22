import React from "react";

const Modal = ({ doctor, doctorDelete }) => {
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <h2 className="flex gap-2  font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-6 h-6 fill-current shrink-0 dark:text-violet-400"
            >
              <path d="M451.671,348.569,408,267.945V184c0-83.813-68.187-152-152-152S104,100.187,104,184v83.945L60.329,348.568A24,24,0,0,0,81.432,384h86.944c-.241,2.636-.376,5.3-.376,8a88,88,0,0,0,176,0c0-2.7-.135-5.364-.376-8h86.944a24,24,0,0,0,21.1-35.431ZM312,392a56,56,0,1,1-111.418-8H311.418A55.85,55.85,0,0,1,312,392ZM94.863,352,136,276.055V184a120,120,0,0,1,240,0v92.055L417.137,352Z"></path>
              <rect width="32" height="136" x="240" y="112"></rect>
              <rect width="32" height="32" x="240" y="280"></rect>
            </svg>
            <span>
              Are you sure you want to delete
              <span className="text-sky-500 font-semibold ml-2">
                "{doctor.name}"
              </span>
            </span>
          </h2>
          <p className="flex-1 mt-4 dark:text-gray-400">
            If you delete this doctor once then he will be completely deleted
            from the database.
          </p>
          <div className="flex flex-col justify-end gap-3 mt-6 sm:flex-row">
            <label
              htmlFor="my-modal-3"
              className="px-6 py-2 rounded-sm cursor-pointer  hover:bg-purple-300"
            >
              No
            </label>
            <label
              htmlFor="my-modal-3"
              onClick={() => doctorDelete(doctor)}
              className="px-6 py-2 rounded-sm shadow-sm dark:bg-red-400 hover:bg-red-600 dark:text-gray-900"
            >
              Yes
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

<div className="flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100"></div>;
