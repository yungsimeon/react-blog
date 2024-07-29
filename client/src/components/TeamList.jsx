import TeamItem from "./TeamItem";

export default function TeamList({ members }) {
  return (
    <>
      {members.map((member) => {
        return <TeamItem key={member.id} member={member} />;
      })}
    </>
  );
}
