import React from "react";

const TagInfo = ({ tag }) => {
  return (
    <div className="tag-info">
      <p>Tag: {tag.name}</p>
      <p>Cor: <span style={{ color: tag.color }}>{tag.color}</span></p>
      <p>Adicionada em: {new Date(tag.addedAt).toLocaleString()}</p>
      {tag.removedAt && (
        <p>Removida em: {new Date(tag.removedAt).toLocaleString()}</p>
      )}
    </div>
  );
};

export default TagInfo;
