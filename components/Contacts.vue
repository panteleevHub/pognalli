<template>
  <address class="contacts" :class="'contacts--' + place">
    <a class="contacts__item contacts__item--phone" href="tel:88005558628">
      <span class="contacts__icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="#FFD74B">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.49995 1.08594C6.7035 1.08594 3.90033 1.55861 2.88322 2.50071C2.03934 3.2823 1.75804 4.66308 1.66321 5.53732C1.66321 5.53732 1.65015 5.62371 1.65015 5.66087C1.65015 6.0037 1.94445 6.27865 2.30427 6.27865C2.34678 6.27865 3.92002 6.15816 4.86851 6.08404C4.89134 6.08091 4.91434 6.07785 4.93716 6.0717C5.29043 6.06248 5.57505 5.79059 5.57505 5.45392L5.57822 4.23679C5.57822 3.85993 5.90214 3.55716 6.3012 3.55716H12.6987C13.0978 3.55716 13.4218 3.8599 13.4218 4.23679L13.425 5.45392C13.425 5.79059 13.7095 6.06248 14.0628 6.0717C14.0854 6.07789 14.1085 6.08091 14.1315 6.08404C15.0801 6.15812 16.6533 6.27865 16.6957 6.27865C17.0553 6.27865 17.3499 6.0037 17.3499 5.66087C17.3499 5.62371 17.3368 5.53732 17.3368 5.53732C17.2419 4.66308 16.9609 3.28234 16.117 2.50071C15.0996 1.55861 12.2964 1.08594 9.49995 1.08594ZM9.49995 9.11752C8.7771 9.11752 8.19164 9.67043 8.19164 10.3531C8.19164 11.0358 8.7771 11.5887 9.49995 11.5887C10.2228 11.5887 10.8082 11.0358 10.8082 10.3531C10.8082 9.67043 10.2228 9.11752 9.49995 9.11752ZM8.51873 6.33731V5.56506C8.51873 5.13881 8.15236 4.79282 7.70106 4.79282C7.24977 4.79282 6.8834 5.13884 6.8834 5.56506V6.33731L2.47095 10.7887C2.16689 11.0698 1.97713 11.462 1.97713 11.8946V13.1333C1.97713 13.816 2.56264 14.3689 3.28545 14.3689H3.61254V15.1412C3.61254 15.5675 3.97895 15.9134 4.43025 15.9134C4.88154 15.9134 5.24792 15.5675 5.24792 15.1412V14.3689H13.752V15.1412C13.752 15.5675 14.1182 15.9134 14.5697 15.9134C15.021 15.9134 15.3873 15.5675 15.3873 15.1412V14.3689H15.7144C16.4373 14.3689 17.0227 13.816 17.0227 13.1333V11.8946C17.0227 11.462 16.833 11.0698 16.5289 10.7887L12.1166 6.33731V5.56506C12.1166 5.13881 11.7502 4.79282 11.2989 4.79282C10.8476 4.79282 10.4812 5.13884 10.4812 5.56506V6.33731H8.51873ZM9.49995 7.88189C10.9456 7.88189 12.1166 8.98777 12.1166 10.3531C12.1166 11.7185 10.9457 12.8244 9.49995 12.8244C8.05426 12.8244 6.88336 11.7185 6.88336 10.3531C6.88336 8.98774 8.05426 7.88189 9.49995 7.88189Z"/>
        </svg>
      </span>
      <span>8 800 555-86-28</span>
    </a>
    <a class="contacts__item contacts__item--email" href="mailto:fakeaddress@gmail.com">
      <span class="contacts__icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="13" viewBox="0 0 19 13" fill="#FFD74B">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1393 10.4663L11.8089 6.5L16.1393 2.53365L15.5488 1.90264L9.24997 7.67188L2.95117 1.90264L2.36066 2.53365L6.69108 6.5L2.36066 10.4663L2.95117 11.0974L7.33081 7.08594L9.24997 8.84375L11.1691 7.08594L15.5488 11.0974L16.1393 10.4663ZM1.57593 0.25C0.76692 0.25 0.111084 0.948839 0.111084 1.80786V11.1921C0.111084 12.0525 0.7616 12.75 1.57593 12.75H16.924C17.733 12.75 18.3889 12.0512 18.3889 11.1921V1.80786C18.3889 0.947478 17.7383 0.25 16.924 0.25H1.57593Z"/>
        </svg>
      </span>
      <span>fakeaddress@gmail.com</span>
    </a>
  </address>
</template>

<script setup>
defineProps({
  place: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.contacts {
  @media (min-width: $desktop-width) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px 40px;
  }
}

.contacts__item {
  display: flex;
  align-items: center;
  column-gap: 15px;
  font-size: 16px;
  line-height: 18px;
  font-weight: 700;
  text-transform: uppercase;

  @media (min-width: $tablet-width) {
    column-gap: 22px;
    font-size: 28px;
    line-height: 28px;
  }

  @media (min-width: $desktop-width) {
    column-gap: 30px;
  }
}

.contacts--header .contacts__item {
  color: $special-blue;
}

.contacts--registration .contacts__item {
  color: $basic-yellow;

  &:hover,
  &:focus {
    color: $special-yellow-dark;
  }

  &:active {
    color: rgba($basic-yellow, 0.3);
  }

  &:hover svg,
  &:focus svg {
    fill: $special-yellow-dark;
  }

  &:active svg {
    opacity: 0.3;
  }
}

.contacts__icon {
  @include flex-center;
  width: 45px;
  height: 45px;
  background-color: $basic-blue;
  border-radius: 50%;

  @media (min-width: $tablet-width) {
    width: 68px;
    height: 68px;
  }

  @media (min-width: $desktop-width) {
    width: 90px;
    height: 90px;
  }
}

.contacts__item--phone svg {
  @media (min-width: $tablet-width) {
    width: 27px;
    height: 25px;
  }

  @media (min-width: $desktop-width) {
    width: 36px;
    height: 34px;
  }
}

.contacts__item--email svg {
  @media (min-width: $tablet-width) {
    width: 27px;
    height: 20px;
  }

  @media (min-width: $desktop-width) {
    width: 36px;
    height: 28px;
    margin-right: -2px;
  }
}
</style>