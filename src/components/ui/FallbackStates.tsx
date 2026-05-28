import React from 'react';
import { Link } from 'react-router-dom';

export const LoadingState: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 2rem',
      textAlign: 'center'
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: '3px solid rgba(255,255,255,0.1)',
        borderTopColor: 'var(--accent-color, #415a77)',
        animation: 'spin 1s linear infinite',
        marginBottom: '1.5rem'
      }}></div>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
      <h3 style={{ margin: 0, fontWeight: 500 }}>E huri ana...</h3>
      <p style={{ color: 'var(--secondary-text, #778da9)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
        Loading Maramataka cycles...
      </p>
    </div>
  );
};

export const MissingDataState: React.FC<{ message?: string }> = ({ message }) => {
  return (
    <div style={{
      padding: '3rem 2rem',
      textAlign: 'center',
      background: 'rgba(255, 255, 255, 0.02)',
      border: '1px dashed var(--border-color, #1b263b)',
      borderRadius: '8px',
      margin: '2rem 0'
    }}>
      <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>🌘</span>
      <h3 style={{ margin: '0 0 0.5rem 0', fontWeight: 600 }}>Kahore he raraunga</h3>
      <p style={{ color: 'var(--secondary-text, #778da9)', margin: '0 0 1.5rem 0', fontSize: '0.95rem' }}>
        {message || 'No lunar data could be found for this cycle or date.'}
      </p>
      <Link to="/months" style={{
        display: 'inline-block',
        padding: '0.6rem 1.2rem',
        backgroundColor: 'var(--accent-color, #415a77)',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '6px',
        fontSize: '0.9rem',
        fontWeight: '600'
      }}>
        View Calendar Grid
      </Link>
    </div>
  );
};
