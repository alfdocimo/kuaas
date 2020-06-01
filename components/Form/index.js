export default function Form({
  name,
  onNameChange,
  verb,
  onVerbChange,
  onSubmit,
}) {
  return (
    <div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <input
            className="form-input"
            id="grid-name"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={onNameChange}
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <div className="relative">
            <select
              className="form-select"
              id="grid-state"
              value={verb}
              onChange={onVerbChange}
            >
              <option>Amazing</option>
              <option>Great</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <button className="form-btn" type="button" onClick={onSubmit}>
            Kudos!
          </button>
        </div>
      </div>
    </div>
  );
}
