import * as React from 'react';

export default function Cell({
  content,
  header,
}) {
  
  const cellMarkup = header ? (
    <th>
      <p>{content}</p>
    </th>
  ) : (
    <td color={'black'}>
      {content}
    </td>
  );

  return (cellMarkup);
}