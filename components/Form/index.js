import React from "react";

export default function Form() {
  return (
    <div>
      <form class="w-full">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <input
              class="form-input"
              id="grid-name"
              type="text"
              placeholder="John Doe"
            />
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <div class="relative">
              <select class="form-select" id="grid-state">
                <option>Amazing</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <button class="form-btn" type="button">
              Kudos!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
