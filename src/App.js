import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const App = () => {
  const theme = {
    light: ['#fff', '#216e39', '#30a14e', '#40c463', '#9be9a8'],
    dark: ['#333', '#63a35c', '#468847', '#2d6a4f', '#0f3f23']
  };

  return (
    <div>
      <h1>GitHub Contributions Calendar</h1>
      <div style={{ border: "1px solid red", width: "fit-content", height: "fit-content" }}>
        <GitHubCalendar
          username="Yashop181"
          blockSize={15}
          blockMargin={2}
          fontSize={16}
          theme={theme}
        />
      </div>
    </div>
  );
}

export default App;
