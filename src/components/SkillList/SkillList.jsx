import "./SkillList.scss";

export default function SkillList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "SkillList active" : "SkillList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}