// Ryzen 5 Progress Bar Data giving the percentage of the the progress bar speed cores and memory
const ryzen5Data = {
    clock: 70, // Percentage for 3.7 GHz
    cores: 60, // Percentage for 6 Cores
    memory: 80, // Percentage for 16 GB
  };
  
  // Ryzen 7 Progress Bar Data the data inside are basicly a group of floating objects they look similar to python dictionary 
  const ryzen7Data = {
    clock: 78, // Percentage for 3.9 GHz
    cores: 80, // Percentage for 8 Cores
    memory: 90, // Percentage for 16 GB
  };
  
  // Function to animate the progress bars
  function animateProgressBar(id, percentage) {
    const bar = document.getElementById(id);
    let currentPercentage = 0;
    
    // Animate the progress bar
    const interval = setInterval(() => {
      if (currentPercentage < percentage) { // if the current percentage of the is greater than currentpercentage
        currentPercentage++; // the percantage augments using the ++;=+1 increase the bar percentage
        bar.style.width = `${currentPercentage}%`;
        bar.setAttribute("aria-valuenow", currentPercentage);
      } else {
        clearInterval(interval); // Stop the animation when it reaches the target value
      }
    }, 20); // Adjust time interval to control speed of animation
  }
  
  // Call the function to animate each progress bar after creating the orignal function we are now using the function we created to call the elements of the divs id to animate the progress bar
  window.onload = () => {
    // Ryzen 5 Bars  calling the all the divs that contains the div that have the ryzen 5 id and animate it if the id dont exist it wont work
    animateProgressBar("ryzen5-clock-bar", ryzen5Data.clock);
    animateProgressBar("ryzen5-cores-bar", ryzen5Data.cores);
    animateProgressBar("ryzen5-memory-bar", ryzen5Data.memory);
  
    // Ryzen 7 Bars the animate progress bar is calling the divs id to animate each bar by its id 
    animateProgressBar("ryzen7-clock-bar", ryzen7Data.clock);
    animateProgressBar("ryzen7-cores-bar", ryzen7Data.cores);
    animateProgressBar("ryzen7-memory-bar", ryzen7Data.memory);
    
  };