import { useState } from 'react'; 
import './App.css';

import batteryIcon from './assets/icon/battery.png';
import wifiIcon from './assets/icon/wifi.png';
import modeIcon from './assets/icon/mode.png';
import finderIcon from './assets/icon/finder.png';
import mailIcon from './assets/icon/mail.png';
import messageIcon from './assets/icon/message.png';
import appstoreIcon from './assets/icon/appstore.png';
import calendarIcon from './assets/icon/calendar.png';
import safariIcon from './assets/icon/safari.png';
import vscodeIcon from './assets/icon/vscode.svg';
import terminalIcon from './assets/icon/terminal.png';
import launchpadIcon from './assets/icon/launchpad.png';
import siriIcon from './assets/icon/siri.png';
import mapsIcon from './assets/icon/maps.png';
import notesIcon from './assets/icon/notes.png';
import photosIcon from './assets/icon/photos.png';

function App() {
  const [showApps, setShowApps] = useState(false); // State to manage app visibility

  const handleLaunchpadClick = () => {
    setShowApps((prev) => !prev); // Toggle app visibility
  };

  return (
    <>
      <div className="background">
        <div className='tab-items'>
          <div className='tab-items1'>
            <p>Home</p>
            <p>Files</p>
            <p>View</p>
            <p>Go</p>
            <p>Window</p>
            <p>Help</p>
          </div>
          <div className='tab-items2'>
            <a href="#" className="icon" aria-label="Battery">
              <img src={batteryIcon} alt="Battery Icon" />
            </a>
            <a href="#" className="icon" aria-label="Wi-Fi">
              <img src={wifiIcon} alt="Wi-Fi Icon" />
            </a>
            <a href="#" className="icon" aria-label="Mode">
              <img src={modeIcon} alt="Mode Icon" />
            </a>
            <p>Wed Nov 03 11:11 PM</p>
          </div>
        </div>
        {showApps && (
            <div className="app-icons-container">
              <AppIcons />
            </div>
          )}
        <div className="icon-container">
          <a href="#" className="icon icon small-icon" aria-label="Finder">
            <img src={finderIcon} alt="Finder Icon" />
          </a>
          <a href="#" className="icon" aria-label="Mail">
            <img src={mailIcon} alt="Mail Icon" />
          </a>
          <a href="#" className="icon" aria-label="Message">
            <img src={messageIcon} alt="Message Icon" />
          </a>
          <a href="#" className="icon icon small-icon" aria-label="App Store">
            <img src={appstoreIcon} alt="Appstore Icon" />
          </a>
          <a href="#" className="icon icon small-icon" aria-label="Launchpad" onClick={handleLaunchpadClick}>
            <img src={launchpadIcon} alt="Launchpad Icon" />
          </a>
          <a href="#" className="icon" aria-label="Calendar">
            <img src={calendarIcon} alt="Calendar Icon" />
          </a>
          <a href="#" className="icon" aria-label="Safari">
            <img src={safariIcon} alt="Safari Icon" />
          </a>
          <a href="#" className="icon" aria-label="VS Code">
            <img src={vscodeIcon} alt="Vs Code Icon" />
          </a>
          <a href="#" className="icon icon small-icon" aria-label="Terminal">
            <img src={terminalIcon} alt="Terminal Icon" />
          </a>
          <a href="#" className="icon icon small-icon" aria-label="Siri">
            <img src={siriIcon} alt="Siri Icon" />
          </a>
          <a href="#" className="icon" aria-label="Maps">
            <img src={mapsIcon} alt="Maps Icon" />
          </a>
          <a href="#" className="icon" aria-label="Notes">
            <img src={notesIcon} alt="Notes Icon" />
          </a>
          <a href="#" className="icon" aria-label="Photos">
            <img src={photosIcon} alt="Photos Icon" />
          </a>
        </div>
      </div>
    </>
  );
}

// Define the AppIcons component
const AppIcons = () => {
  const appIcons = [
    { src: finderIcon, alt: "Finder Icon", label: "Finder" },
    { src: mailIcon, alt: "Mail Icon", label: "Mail" },
    { src: messageIcon, alt: "Message Icon", label: "Messages" },
    { src: appstoreIcon, alt: "App Store Icon", label: "App Store" },
    { src: calendarIcon, alt: "Calendar Icon", label: "Calendar" },
    { src: safariIcon, alt: "Safari Icon", label: "Safari" },
    { src: vscodeIcon, alt: "VS Code Icon", label: "VS Code" },
    { src: terminalIcon, alt: "Terminal Icon", label: "Terminal" },
    { src: launchpadIcon, alt: "Launchpad Icon", label: "Launchpad" },
    { src: siriIcon, alt: "Siri Icon", label: "Siri" },
    { src: mapsIcon, alt: "Maps Icon", label: "Maps" },
    { src: notesIcon, alt: "Notes Icon", label: "Notes" },
    { src: photosIcon, alt: "Photos Icon", label: "Photos" },
  ];

  return (
    <div className="app-icons-grid">
      {appIcons.map((icon, index) => (
        <div key={index} className="app-icon">
          <a href="#" className="icon" aria-label={icon.alt}>
            <img src={icon.src} alt={icon.alt} />
          </a>
          <p className="icon-label">{icon.label}</p> {/* Display the label */}
        </div>
      ))}
    </div>
  );
};

export default App;
