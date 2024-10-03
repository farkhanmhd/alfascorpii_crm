import Tooltip from "@/components/ui/Tooltip";
import Icon from "@/components/ui/Icon";
import Link from "next/link";

const ActionColumn = ({ table, id }) => {
  return (
    <td className="table-td flex space-x-3 rtl:space-x-reverse">
      <Tooltip content="Edit" placement="top" arrow animation="shift-away">
        <Link href={`/${table}/${id}`} className="action-btn h-10 w-10 border-primary-500">
          <Icon icon="heroicons:pencil-square" width={20} className="text-primary-500" />
        </Link>
      </Tooltip>
      <Tooltip content="Delete" placement="top" arrow animation="shift-away" theme="danger">
        <button className="action-btn h-10 w-10 border-danger-500" type="button">
          <Icon icon="heroicons:trash" width={20} className="text-danger-500" />
        </button>
      </Tooltip>
    </td>
  );
};

export default ActionColumn;
