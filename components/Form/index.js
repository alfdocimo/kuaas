export default function Form({
  subjectList,
  name,
  onNameChange,
  onSubjectChange,
  subject,
  onSubmit,
  onGifTagChange,
  gifTag
}) {
  const renderSubjectList = (subjects) =>
    subjects.map((subject) => <option value={subject} key={subject} />);

  return (
    <div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
          <input
            className="form-input"
            id="grid-name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={onNameChange}
          />
        </div>
        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
          <div className="relative">
            <input
              list="subjects"
              name="subject"
              id="subject"
              className="form-input"
              placeholder="Subject"
              onChange={onSubjectChange}
              value={subject}
            />
            <datalist id="subjects">{renderSubjectList(subjectList)}</datalist>
          </div>
        </div>
        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
          <input
            className="form-input"
            id="grid-gif-tag"
            type="text"
            placeholder="Gif i.e Congrats"
            value={gifTag}
            onChange={onGifTagChange}
          />
        </div>
        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
          <button className="form-btn btn-primary" type="button" onClick={onSubmit}>
            Kudos!
          </button>
        </div>
      </div>
    </div>
  );
}
