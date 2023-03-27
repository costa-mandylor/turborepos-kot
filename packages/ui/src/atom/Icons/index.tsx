import React from 'react';

import * as Icons from 'icons-web';

const IconsPreview: React.FC = () => {
  return (
    <>
      <h1>Icons</h1>
      <div
        style={{
          display: 'flex',
          gap: '10px',
        }}>
        {Object.values(Icons).map((IconComponent, keys: number) => {
          return (
            <div key={keys}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  gap: 10,
                  textAlign: 'center',
                }}>
                {IconComponent && <IconComponent />}
                <span
                  style={{
                    color: '#797588',
                  }}>
                  {Object.keys(Icons)?.[keys]}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default IconsPreview;
