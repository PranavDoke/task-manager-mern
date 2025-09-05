import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete, onToggleStatus }) => {
  const styles = {
    container: {
      background: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      overflow: 'hidden'
    },
    task: {
      padding: '20px',
      borderBottom: '1px solid #eee',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    },
    taskContent: {
      flex: 1
    },
    title: {
      fontSize: '18px',
      fontWeight: '500',
      marginBottom: '8px'
    },
    description: {
      color: '#666',
      marginBottom: '10px'
    },
    status: {
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: '500'
    },
    complete: {
      backgroundColor: '#d4edda',
      color: '#155724'
    },
    pending: {
      backgroundColor: '#fff3cd',
      color: '#856404'
    },
    actions: {
      display: 'flex',
      gap: '8px',
      marginLeft: '20px'
    },
    button: {
      padding: '6px 12px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '12px'
    },
    editButton: {
      backgroundColor: '#007bff',
      color: 'white'
    },
    deleteButton: {
      backgroundColor: '#dc3545',
      color: 'white'
    },
    toggleButton: {
      backgroundColor: '#28a745',
      color: 'white'
    },
    emptyState: {
      padding: '40px',
      textAlign: 'center',
      color: '#666'
    },
    completedTitle: {
      textDecoration: 'line-through',
      opacity: 0.7
    }
  };

  if (tasks.length === 0) {
    return (
      <div style={styles.container}>
        <div style={styles.emptyState}>
          <h3>No tasks yet</h3>
          <p>Add your first task to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {tasks.map(task => (
        <div key={task._id} style={styles.task}>
          <div style={styles.taskContent}>
            <h3 style={{
              ...styles.title,
              ...(task.status === 'complete' ? styles.completedTitle : {})
            }}>
              {task.title}
            </h3>
            {task.description && (
              <p style={styles.description}>{task.description}</p>
            )}
            <span style={{
              ...styles.status,
              ...(task.status === 'complete' ? styles.complete : styles.pending)
            }}>
              {task.status}
            </span>
          </div>
          <div style={styles.actions}>
            <button
              onClick={() => onToggleStatus(task._id, task.status === 'complete' ? 'pending' : 'complete')}
              style={{...styles.button, ...styles.toggleButton}}
            >
              {task.status === 'complete' ? 'Mark Pending' : 'Mark Complete'}
            </button>
            <button
              onClick={() => onEdit(task)}
              style={{...styles.button, ...styles.editButton}}
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(task._id)}
              style={{...styles.button, ...styles.deleteButton}}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;