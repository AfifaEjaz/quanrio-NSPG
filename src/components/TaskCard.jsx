import { Link } from "react-router-dom";

const TaskCard = ({task}) => {
  return (
    <>
      <div
        className="bg-white rounded-xl border border-border-color "
      >
        <div className="flex items-center gap-2 border-b border-border-color pb-[24px] p-[24px]">
          <img src={task.icon} alt="" />
          <span className="text-base font-semibold ">{task.title}</span>
        </div>
        <div className="py-[16px] text-end px-[24px]">
          <Link to={task.url} className="text-blue">
            View
          </Link>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
