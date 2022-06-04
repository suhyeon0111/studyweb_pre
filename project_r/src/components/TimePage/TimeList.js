import React from 'react';
import randomColor from 'randomcolor';

function Time({ user }) {
  const color = [
    '#ffafb0',
    '#fdd0ac',
    '#fdfa87',
    '#bee9b4',
    '#aee4ff',
    '#caa6fe',
  ];

  return (
    <div
      style={{
        backgroundColor: randomColor(),
        width: '150px',
        height: '50px',
        color: 'black',
        marginBottom: '30px',
        borderRadius: '30px',
        lineHeight: '50px',
        textAlign: 'center',
      }}
    >
      수학
      {user.subject}
    </div>
  );
}

function TimeList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <Time user={user} key={user.id} />
      ))}
    </div>
  );
}

export default TimeList;
