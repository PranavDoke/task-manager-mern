import React, { useState, useEffect } from 'react';

const TaskForm = ({ task, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title,
        description: task.description || ''
      });
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: '', description: '' });
  };

  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    },
    form: {
      background: 'white',
      padding: '2rem',
      borderRadius: '8px',
      width: '90%',
      maxWidth: '500px'
    },
    input: {
      width: '100%',
      padding: '12px',
      margin: '8px 0',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '16px'
    },
    textarea: {
      width: '100%',
      padding: '12px',
      margin: '8px 0',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '16px',
      minHeight: '100px',
      resize: 'vertical'
    },
    buttonGroup: {
      display: 'flex',
      gap: '10px',
      marginTop: '20px'
    },
    button: {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px'
    },
    submitButton: {
      backgroundColor: '#28a745',
      color: 'white'
    },
    cancelButton: {
      backgroundColor: '#6c757d',
      color: 'white'
    }
  };

  return (
    <div style={styles.overlay}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h3>{task ? 'Edit Task' : 'Add New Task'}</h3>
        <input
          type="text"
          placeholder="Task title"
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
          style={styles.input}
          required
        />
        <textarea
          placeholder="Task description (optional)"
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          style={styles.textarea}
        />
        <div style={styles.buttonGroup}>
          <button type="submit" style={{...styles.button, ...styles.submitButton}}>
            {task ? 'Update' : 'Add'} Task
          </button>
          <button type="button" onClick={onCancel} style={{...styles.button, ...styles.cancelButton}}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;