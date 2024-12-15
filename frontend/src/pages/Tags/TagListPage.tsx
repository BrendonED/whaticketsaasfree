import React, { useEffect, useState } from "react";
import api from "../../services/api"; // Verifique o caminho correto para o serviço de API
import TagInfo from "./TagInfo";

const TagListPage = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      const response = await api.get("/tags");
      setTags(response.data.tags);
    };

    fetchTags();
  }, []);

  return (
    <div>
      <h2>Lista de Tags</h2>
      {tags.map(tag => (
        <TagInfo key={tag.id} tag={tag} />
      ))}
    </div>
  );
};

export default TagListPage;
