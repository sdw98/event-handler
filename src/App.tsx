import { useState, type ChangeEvent, type FormEvent } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    category: "general",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("제출된 데이터:", formData);
    alert("폼이 제출되었습니다!");
  };

  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center">
      <form onSubmit={handleFormSubmit}>
        <h4>Form Event Test</h4>

        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="이름을 입력하세요"
          />
        </div>
        <button type="submit">제출</button>
      </form>
    </div>
  );
};

export default App;
