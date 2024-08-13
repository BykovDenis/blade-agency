import 'virtual:svg-icons-register';

window.addEventListener('load', () => {
  
  const mainBodyBlock: HTMLElement | null = document.querySelector<HTMLElement>('.main-body');
  const sliderBlock: HTMLElement | null = document.querySelector<HTMLElement>('#slider');
  const participantsBlock: HTMLElement | null = document.querySelector<HTMLElement>('#participants');
  const judgesBlock: HTMLElement | null = document.querySelector<HTMLElement>('#judges');
  const ticketsBlock: HTMLElement | null = document.querySelector<HTMLElement>('#tickets');
  const contactUsBlock: HTMLElement | null = document.querySelector<HTMLElement>('#contact-us');
  const mainNavItems: NodeListOf<HTMLElement> | null = document.querySelectorAll<HTMLElement>('.nav-items__link');
  const hashtagElement: HTMLElement | null = document.querySelector<HTMLElement>('.logo-container__hashtag');
  const langActualElement: HTMLElement | null = document.querySelector<HTMLElement>('.lang__actual');
  
  function changeStyleMainNav(isVisible: boolean) {
    if (hashtagElement) {
      if (isVisible) {
        hashtagElement.classList.add('logo-container__hashtag--invisible');
      } else {
        hashtagElement.classList.remove('logo-container__hashtag--invisible');
      }
    }
    if (langActualElement) {
      if (isVisible) {
        langActualElement.classList.add('lang__actual--main-page');
      } else {
        langActualElement.classList.remove('lang__actual--main-page');
      }
    }
    if (mainNavItems) {
      for (let element of mainNavItems) {
        if (element) {
          if (isVisible) {
            element.classList.add('link-button--main-page');
          } else {
            element.classList.remove('link-button--main-page');
          }
        }
      }
    }
  }
  
  if (sliderBlock) {
    sliderBlock.style.display = 'none';
  }
  if (judgesBlock) {
    judgesBlock.style.display = 'none';
  }
  if (ticketsBlock) {
    ticketsBlock.style.display = 'none';
  }
  if (contactUsBlock) {
    contactUsBlock.style.display = 'none';
  }
  
  const navFormBlock: HTMLElement | null = document.querySelector<HTMLElement>('#nav-form');
  
  if (navFormBlock) {
    const mainLinkElement = document.querySelector<HTMLElement>('#main-link-button');
    const participantsLinkButtonElement = document.querySelector<HTMLElement>('#participants-link-button');
    const judgesLinkButtonElement = document.querySelector<HTMLElement>('#judges-link-button');
    const ticketsLinkButtonElement = document.querySelector<HTMLElement>('#tickets-link-button');
    const contactsLinkButtonElement = document.querySelector<HTMLElement>('#contacts-link-button');
    
    
    navFormBlock.addEventListener('click', (evt: MouseEvent) => {
      const element: any = evt.target;
      switch (element.id) {
        case 'main-link-button': {
          mainLinkElement?.classList.add('link-button--active');
          participantsLinkButtonElement?.classList.remove('link-button--active');
          judgesLinkButtonElement?.classList.remove('link-button--active');
          ticketsLinkButtonElement?.classList.remove('link-button--active');
          contactsLinkButtonElement?.classList.remove('link-button--active');
          if (mainBodyBlock) {
            mainBodyBlock.classList.add('main-body--main-page')
          }
          if (sliderBlock) {
            sliderBlock.style.display = 'block';
          }
          if (participantsBlock) {
            participantsBlock.style.display = 'none';
          }
           if (judgesBlock) {
            judgesBlock.style.display = 'none';
          }
          if (ticketsBlock) {
            ticketsBlock.style.display = 'none';
          }
          if (contactUsBlock) {
            contactUsBlock.style.display = 'none';
          }
          
          changeStyleMainNav(true);
          
          break;
        }
        case 'participants-link-button': {
          participantsLinkButtonElement?.classList.add('link-button--active');
          mainLinkElement?.classList.remove('link-button--active');
          judgesLinkButtonElement?.classList.remove('link-button--active');
          ticketsLinkButtonElement?.classList.remove('link-button--active');
          contactsLinkButtonElement?.classList.remove('link-button--active');
          
          if (mainBodyBlock) {
            mainBodyBlock.classList.remove('main-body--main-page')
          }
          if (sliderBlock) {
            sliderBlock.style.display = 'none';
          }
          if (participantsBlock) {
            participantsBlock.style.display = 'block';
          }
          if (judgesBlock) {
            judgesBlock.style.display = 'none';
          }
          if (ticketsBlock) {
            ticketsBlock.style.display = 'none';
          }
          if (contactUsBlock) {
            contactUsBlock.style.display = 'none';
          }
          changeStyleMainNav(false);
          break;
        }
        case 'judges-link-button': {
          judgesLinkButtonElement?.classList.add('link-button--active');
          mainLinkElement?.classList.remove('link-button--active');
          participantsLinkButtonElement?.classList.remove('link-button--active');
          ticketsLinkButtonElement?.classList.remove('link-button--active');
          contactsLinkButtonElement?.classList.remove('link-button--active');
          
          if (mainBodyBlock) {
            mainBodyBlock.classList.remove('main-body--main-page')
          }
          if (sliderBlock) {
            sliderBlock.style.display = 'none';
          }
          if (participantsBlock) {
            participantsBlock.style.display = 'none';
          }
          if (judgesBlock) {
            judgesBlock.style.display = 'block';
          }
          if (ticketsBlock) {
            ticketsBlock.style.display = 'none';
          }
          if (contactUsBlock) {
            contactUsBlock.style.display = 'none';
          }
          changeStyleMainNav(false);
          break;
        }
        case 'tickets-link-button': {
          ticketsLinkButtonElement?.classList.add('link-button--active');
          mainLinkElement?.classList.remove('link-button--active');
          participantsLinkButtonElement?.classList.remove('link-button--active');
          judgesLinkButtonElement?.classList.remove('link-button--active');
          contactsLinkButtonElement?.classList.remove('link-button--active');
          
          if (mainBodyBlock) {
            mainBodyBlock.classList.remove('main-body--main-page')
          }
          if (sliderBlock) {
            sliderBlock.style.display = 'none';
          }
          if (participantsBlock) {
            participantsBlock.style.display = 'none';
          }
          if (judgesBlock) {
            judgesBlock.style.display = 'none';
          }
          if (ticketsBlock) {
            ticketsBlock.style.display = 'block';
          }
          if (contactUsBlock) {
            contactUsBlock.style.display = 'none';
          }
          changeStyleMainNav(false);
          break;
        }
        case 'contacts-link-button': {
          contactsLinkButtonElement?.classList.add('link-button--active');
          mainLinkElement?.classList.remove('link-button--active');
          participantsLinkButtonElement?.classList.remove('link-button--active');
          judgesLinkButtonElement?.classList.remove('link-button--active');
          ticketsLinkButtonElement?.classList.remove('link-button--active');
          
          if (mainBodyBlock) {
            mainBodyBlock.classList.remove('main-body--main-page')
          }
          if (sliderBlock) {
            sliderBlock.style.display = 'none';
          }
          if (participantsBlock) {
            participantsBlock.style.display = 'none';
          }
          if (judgesBlock) {
            judgesBlock.style.display = 'none';
          }
          if (ticketsBlock) {
            ticketsBlock.style.display = 'none';
          }
          if (contactUsBlock) {
            contactUsBlock.style.display = 'block';
          }
          changeStyleMainNav(false);
          break;
        }
      }
    })
  }
  
});