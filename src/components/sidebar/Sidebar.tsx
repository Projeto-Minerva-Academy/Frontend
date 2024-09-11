
import React, { useState } from 'react';

interface CourseType {
  value: string;
  label: string;
}

interface Topic {
  value: string;
  label: string;
}

interface SidebarProps {
  courseTypes: CourseType[];
  topics: Topic[];
}

const Sidebar: React.FC<SidebarProps> = ({ courseTypes, topics }) => {
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [duration, setDuration] = useState<number>(0);
  const [selectedTopic, setSelectedTopic] = useState<string>('');

  return (
    <aside className="w-80 bg-white text-black h-screen p-4 flex flex-col">
      {/* Área de busca */}
      <div className="mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar cursos..."
          className="w-full p-2 rounded bg-white border border-gray-600 focus:outline-none"
        />
      </div>

      {/* Seção de seleção de tipo de curso */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Tipo de Curso</h3>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="w-full p-2 rounded bg-white border border-gray-600 focus:outline-none"
        >
          <option value="">Todos os tipos</option>
          {courseTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      {/* Barra deslizante para duração */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Duração do Curso (em horas)</h3>
        <input
          type="range"
          min="0"
          max="250"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="w-full"
        />
        <p className="mt-2 text-sm">Duração: {duration} horas</p>
      </div>

      {/* Seção de filtro por tópico */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Tópico</h3>
        {topics.map((topic) => (
          <div key={topic.value} className="flex items-center mb-2">
            <input
              type="radio"
              id={topic.value}
              name="topic"
              value={topic.value}
              checked={selectedTopic === topic.value}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="mr-2"
            />
            <label htmlFor={topic.value}>{topic.label}</label>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
