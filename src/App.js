import React from 'react';
import './style.css';
import Ui from './Ui.js';

export default function App() {
  return (
    <div class="mainButtons">
      <Ui title="Set up devices" />
      <Ui title="Start" />
      <Ui title="Stop" />
      <Ui title="Preferences" />
    </div>
  );
}
