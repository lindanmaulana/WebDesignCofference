const SpeakersPerson = (props) => {
  const { src, name, role } = props;

  return (
    <div className="snap-center">
      <div className="w-[293px] h-[439px] flex snap-always">
        <div className="flex flex-col items-center justify-start w-full h-full px-4 py-6">
          <img
            src={`./assets/img/person/${src}`}
            alt={name}
            className="w-full max-h-[262px] mb-[20px] bg-center"
          />
          <h2 className="text-[18px] text-[#333333] mb-[4px]">{name}</h2>
          <p className="mb-[10px] text-[12px] text-[#666666]">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default SpeakersPerson;
