const links = [
    {
      label: "Week-01",
      url: "https://drive.google.com/drive/folders/1kv0aEDy-9uFYfBeAwM6KiSl86MUp2xcv?usp=drive_link"
    },
  
    {
      label: "Week-02",
      url: "https://drive.google.com/drive/folders/1zOx81T6GRdK8sRdRA3nlH2-IKXEXVZ0w?usp=drive_link"
    },    
    {
      label: "Week-03",
      url: "https://drive.google.com/drive/folders/1XwcRoO686YS-NZAiJyaqIThHIJ80jl2A?usp=sharing"
    },
      
    {
      label: "Week-04",
      url: "https://drive.google.com/drive/folders/1PqSVYYABZqLi-ePNeC-m8CdEEYKbVz5_?usp=sharing"
    },    
    
    {
      label: "Week-05",
      url: "https://drive.google.com/drive/folders/1qMQtmIeRa9HLmw2aaoGDh5xcLDvJzpsL?usp=sharing"
    },        
      
    {
      label: "Week-06 ",
      url: "https://drive.google.com/drive/folders/1KuzSCXSAbg0SkvXVhf49gvIunDepfT6L?usp=sharing"
    },   
    {
      label: "Week-07 ",
      url: "https://drive.google.com/drive/folders/1S2nLndtk_iGzVxRx6jSov0sXAammcvCC?usp=sharing"
    },        
    {
      label: "Week-08",
      url: "https://drive.google.com/drive/folders/1UmYG5hbFsmwMA814ZrFT-ZUkbL68JhWi?usp=sharing"
    },    
    {
      label: "Week-09",
      url: "https://drive.google.com/drive/folders/1ig61hNfEAzM27Fb-ImONtxzinfgnpIUE?usp=sharing"
    },
  
    {
      label: "Week-10",
      url: "https://drive.google.com/drive/folders/143Xa5S224w7JIrVDZsgNoeXyan9SqwkE?usp=sharing"
    },    
      
    {
      label: "Week-11",
      url: "https://drive.google.com/drive/folders/16-cwB02mlygi86thyyOQmLd2bY7INHLo?usp=sharing"
    },    
    {
      label: "Week-12",
      url: "https://drive.google.com/drive/folders/1uxxjQm2_02XTSCJbwNRnlJb4TX8ZuFVJ?usp=sharing"
    },
    {
      label: "Week-13",
      url: "https://docs.google.com/document/d/1PnmZn9uqbEMoCMChT2n56llrq8jQH2Ru/edit?usp=sharing&ouid=103493065434295567823&rtpof=true&sd=true"
    },
    {
      label: "Final-Challenge",
      url: "https://kwadjoowusu-ansahquarshie.github.io/wdd230/wdd330/final/index.html"
    },
    {
      label: "Sleep-Outside",
      url: "https://github.com/kevinmorales05/sleepoutside-latam-afrika"
    },
    {
      label: "Trello Board",
      url: "https://trello.com/b/ISxFgDEl/sleep-outside-latam-afrika"
    }
  ];
  
  const orderedlist = document.querySelector("ol");
  
  for (const item of links) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", item.url);
    a.textContent = item.label;
    li.appendChild(a);
  
    orderedlist.appendChild(li);
  }
       
  const toggleMenu = () => {
    document.querySelector('#navigation').classList.toggle('display');
  }
  
  document.querySelector('#navigation').addEventListener('click', toggleMenu);
  
  function sendAlert() {
    alert("This is an alert() method!");
  }
  
  function scrollBottom() {
    window.scrollTo(0,5000);
  }
  
  function scrollBack() {
    window.scrollTo(0,50);
  }
