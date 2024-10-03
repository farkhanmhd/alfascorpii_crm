const StatusColumn = ({ statusValues, statusColors, row }) => {
  return (
    <span className="block w-full">
      <span
        className={` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${
          statusValues.includes(row?.cell?.value)
            ? statusColors[statusValues.indexOf(row?.cell?.value)]
            : ""
        } `}
      >
        {row?.cell?.value}
      </span>
    </span>
  );
};

export default StatusColumn;