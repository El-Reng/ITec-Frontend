import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

const API_URL = "http://localhost:8000/tareas";

function Page({ reload, onDelete, onEdit }) {
  const [tasks, setTasks] = useState([]);

  async function fetchData() {
    const response = await axios.get(`${API_URL}/`);
    setTasks(response.data);
  }

  useEffect(() => {
    fetchData();
  }, [reload]);

  return (
    <section className="flex-1 p-6 flex flex-col gap-5">
      {tasks.map((task) => (
        <Card key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </section>
  );
}

export default Page;
