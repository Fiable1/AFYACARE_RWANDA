export const sectionIds = {
  home: 'home',
  findCare: 'find-care',
  bookAppointment: 'book-appointment',
  about: 'about',
  team: 'team',
  keyFeatures: 'key-features',
  getStarted: 'get-started',
}

export const links = {
  brand: `#${sectionIds.home}`,
  heroPrimary: `#${sectionIds.getStarted}`,
  heroSecondary: `#${sectionIds.keyFeatures}`,
  ctaPrimary: `#${sectionIds.bookAppointment}`,
}

export const navLinks = [
  { label: 'Home', href: `#${sectionIds.home}` },
  { label: 'Find Care', href: `#${sectionIds.findCare}` },
  { label: 'Book Appointment', href: `#${sectionIds.bookAppointment}` },
  { label: 'About', href: `#${sectionIds.about}` },
  { label: 'Team', href: `#${sectionIds.team}` },
]
