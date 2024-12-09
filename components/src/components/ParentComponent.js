
import Hobby from "./Hobby";
function ParentComponent() {
  
  const hobbies = ["Reading", "Gaming", "Cycling"];
  const colors = ["text-red-500", "text-green-500", "text-blue-500"]; // Add colors for each hobby

  return (
    <div className="bg-base-200 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">My Hobbies</h2>
      {hobbies.map((hobby, index) => (
        <Hobby key={index} hobby={hobby} color={colors[index]} />
      ))}
    </div>
  );
}
export default ParentComponent;
