
import { useEffect, useMemo, useState } from 'react'
import {
  Activity,
  Building2,
  ChevronDown,
  Map,
  MapPin,
  Navigation,
  Search,
  SlidersHorizontal,
  Star,
} from 'lucide-react'

const FACILITIES = [
  {
    id: 1,
    name: 'King Faisal Hospital Kigali',
    type: 'Hospitals',
    badge: 'Emergency',
    district: 'Gasabo',
    address: 'KG 544 St, Kigali, Rwanda',
    rating: 4.9,
    reviews: 1840,
    latitude: -1.9441,
    longitude: 30.0928,
    image:
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    name: 'CHUK - University Teaching Hospital',
    type: 'Hospitals',
    badge: '24/7',
    district: 'Nyarugenge',
    address: 'KN 4 Ave, Kigali, Rwanda',
    rating: 4.7,
    reviews: 1320,
    latitude: -1.9536,
    longitude: 30.0606,
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    name: 'Rwanda Military Hospital',
    type: 'Hospitals',
    badge: 'Specialist',
    district: 'Kicukiro',
    address: 'KK 721 St, Kigali, Rwanda',
    rating: 4.8,
    reviews: 980,
    latitude: -1.9785,
    longitude: 30.1127,
    image:
      'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    name: 'Butaro District Hospital',
    type: 'Hospitals',
    badge: 'Maternity',
    district: 'Burera',
    address: 'Butaro, Northern Province, Rwanda',
    rating: 4.8,
    reviews: 860,
    latitude: -1.4068,
    longitude: 29.8507,
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    name: 'Butare University Teaching Hospital',
    type: 'Hospitals',
    badge: 'Referral',
    district: 'Huye',
    address: 'Butare, Southern Province, Rwanda',
    rating: 4.6,
    reviews: 1014,
    latitude: -2.5967,
    longitude: 29.7394,
    image:
      'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 6,
    name: 'Kibuye District Hospital',
    type: 'Clinics',
    badge: 'Primary Care',
    district: 'Karongi',
    address: 'Kibuye, Western Province, Rwanda',
    rating: 4.5,
    reviews: 642,
    latitude: -2.0579,
    longitude: 29.3498,
    image:
      'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1200&q=80',
  },
  {
     id: 7,
    name: 'Ivuriro Goodlife Hospital',
    type: 'Urgent Care',
    badge: 'Primary care  Care',
    district: 'Gasabo',
    address: 'KG 11 Ave, Kigali, Rwanda',
    rating: 4.7,
    reviews: 512,
    latitude: -1.9382,
    longitude: 30.1044,
  image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80'
  }
]

const RWANDA_BOUNDS = {
  minLat: -2.84,
  maxLat: -1.04,
  minLng: 28.86,
  maxLng: 30.9,
}

const typeOptions = ['All Types', 'Hospitals', 'Clinics', 'Urgent Care']

const formatDistance = (distance) => {
  if (!Number.isFinite(distance)) return 'Distance unavailable'
  if (distance < 1) return `${(distance * 1000).toFixed(0)} m away`
  return `${distance.toFixed(1)} km away`
}

const toMapPosition = (latitude, longitude) => {
  const x = ((longitude - RWANDA_BOUNDS.minLng) / (RWANDA_BOUNDS.maxLng - RWANDA_BOUNDS.minLng)) * 100
  const y = (1 - (latitude - RWANDA_BOUNDS.minLat) / (RWANDA_BOUNDS.maxLat - RWANDA_BOUNDS.minLat)) * 100
  return {
    left: `${Math.min(92, Math.max(8, x))}%`,
    top: `${Math.min(94, Math.max(6, y))}%`,
  }
}

const getDistanceKm = (startLat, startLng, endLat, endLng) => {
  const toRad = (value) => (value * Math.PI) / 180
  const earthRadius = 6371
  const latDistance = toRad(endLat - startLat)
  const lngDistance = toRad(endLng - startLng)

  const a =
    Math.sin(latDistance / 2) * Math.sin(latDistance / 2) +
    Math.cos(toRad(startLat)) *
      Math.cos(toRad(endLat)) *
      Math.sin(lngDistance / 2) *
      Math.sin(lngDistance / 2)

  return earthRadius * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)))
}

function RwandaMap({ facilities, userLocation, highlightedFacility }) {
  return (
    <div className="relative h-[520px] overflow-hidden rounded-[34px] border border-emerald-100 bg-[radial-gradient(circle_at_top,#ffffff_0%,#ecfdf3_50%,#daf4e6_100%)] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">Rwanda Map</p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-900">Nearby care around your live location</h3>
          <p className="mt-2 max-w-xl text-sm text-slate-500">
            Hospitals are positioned across Rwanda, and your current browser location is marked in real time when permission is allowed.
          </p>
        </div>
        <div className="rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-medium text-emerald-700 backdrop-blur">
          {userLocation ? 'Live tracking active' : 'Waiting for location'}
        </div>
      </div>

      <div className="relative h-[400px] rounded-[28px] border border-white/60 bg-white/55 p-5 backdrop-blur">
        <div className="absolute inset-5 rounded-[24px] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(229,248,236,0.85))]" />
        <div className="absolute inset-8 rounded-[26%_44%_32%_38%/22%_35%_40%_43%] border border-emerald-200/80 bg-[radial-gradient(circle_at_35%_25%,rgba(22,163,74,0.22),transparent_35%),radial-gradient(circle_at_70%_70%,rgba(34,197,94,0.18),transparent_28%),linear-gradient(180deg,#eafff0_0%,#dff6e7_100%)] shadow-inner">
          <div className="absolute inset-[8%] opacity-50">
            <svg viewBox="0 0 100 100" className="h-full w-full text-emerald-600/35">
              <path
                d="M58 4C68 8 75 14 82 23C87 31 91 41 90 51C88 62 83 69 80 77C76 86 68 94 58 97C47 100 36 98 27 91C18 84 12 73 11 63C9 52 11 43 17 34C22 26 25 18 34 12C42 7 49 2 58 4Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="absolute inset-0">
            {facilities.map((facility) => {
              const markerPosition = toMapPosition(facility.latitude, facility.longitude)
              const active = highlightedFacility?.id === facility.id

              return (
                <button
                  key={facility.id}
                  type="button"
                  style={markerPosition}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 transition ${
                    active ? 'z-20 scale-110' : 'z-10'
                  }`}
                  title={facility.name}
                >
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full border-2 border-white shadow-lg ${
                      active ? 'bg-red-500' : 'bg-emerald-600'
                    }`}
                  >
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </span>
                </button>
              )
            })}

            {userLocation && (
              <div
                style={toMapPosition(userLocation.latitude, userLocation.longitude)}
                className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/20 animate-ping" />
                <div className="relative flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-sky-500 shadow-lg">
                  <Navigation className="h-3.5 w-3.5 text-white" />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="absolute bottom-6 left-6 rounded-2xl bg-slate-950/88 px-4 py-3 text-sm text-white shadow-2xl">
          <p className="font-semibold">Legend</p>
          <p className="mt-1 text-slate-300">Green: hospitals and clinics</p>
          <p className="text-slate-300">Blue: your current location</p>
          <p className="text-slate-300">Red: closest recommended hospital</p>
        </div>
      </div>
    </div>
  )
}

export default function FindCare() {
  const [query, setQuery] = useState('')
  const [facilityType, setFacilityType] = useState('All Types')
  const [view, setView] = useState('list')
  const [userLocation, setUserLocation] = useState(null)
  const [locationStatus, setLocationStatus] = useState('Location not requested yet.')

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationStatus('Geolocation is not supported in this browser.')
      return undefined
    }

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
        setLocationStatus('Your location is being tracked live.')
      },
      () => {
        setLocationStatus('Location access was denied. Showing Rwanda hospitals with a Kigali default.')
      },
      {
        enableHighAccuracy: true,
        maximumAge: 10000,
        timeout: 15000,
      },
    )

    return () => navigator.geolocation.clearWatch(watchId)
  }, [])

  const fallbackLocation = { latitude: -1.9441, longitude: 30.0619 }
  const activeLocation = userLocation ?? fallbackLocation

  const facilitiesWithDistance = useMemo(
    () =>
      FACILITIES.map((facility) => ({
        ...facility,
        distanceKm: getDistanceKm(
          activeLocation.latitude,
          activeLocation.longitude,
          facility.latitude,
          facility.longitude,
        ),
      })).sort((first, second) => first.distanceKm - second.distanceKm),
    [activeLocation.latitude, activeLocation.longitude],
  )

  const filteredFacilities = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return facilitiesWithDistance.filter((facility) => {
      const matchesType = facilityType === 'All Types' || facility.type === facilityType
      const matchesQuery =
        normalizedQuery.length === 0 ||
        facility.name.toLowerCase().includes(normalizedQuery) ||
        facility.address.toLowerCase().includes(normalizedQuery) ||
        facility.district.toLowerCase().includes(normalizedQuery)

      return matchesType && matchesQuery
    })
  }, [facilitiesWithDistance, facilityType, query])

  const nearestFacility = filteredFacilities[0] ?? facilitiesWithDistance[0]

  return (
    <div className="min-h-screen bg-[#fbfdfb] text-slate-900">
      

      <main id="find-care">
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-[1120px] px-6 py-10 lg:px-8 lg:py-12">
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950 lg:text-[3.1rem]">
              Find Hospitals &amp; Clinics
            </h1>
            <p className="mt-3 text-lg text-slate-500">
              Locate nearby healthcare facilities in Rwanda based on your location.
            </p>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#eefaf0_0%,#f9fdf9_72%)]">
          <div className="mx-auto max-w-[1120px] px-6 py-7 lg:px-8 lg:py-8">
            <div className="rounded-[28px] border border-white/70 bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)] lg:p-6">
              <div className="grid gap-4 lg:grid-cols-[1.7fr_1fr_0.65fr_0.9fr]">
                <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-400 shadow-inner">
                  <MapPin className="h-5 w-5 shrink-0" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    type="text"
                    placeholder="Enter city, district, or address..."
                    className="w-full bg-transparent text-[15px] text-slate-700 outline-none placeholder:text-slate-400"
                  />
                </label>

                <div className="relative">
                  <SlidersHorizontal className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <select
                    value={facilityType}
                    onChange={(event) => setFacilityType(event.target.value)}
                    className="h-full w-full appearance-none rounded-2xl border border-slate-200 bg-white py-4 pl-14 pr-12 text-[15px] text-slate-700 outline-none"
                  >
                    {typeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-green-700 px-6 py-4 text-[15px] font-semibold text-white shadow-sm transition hover:bg-emerald-800"
                >
                  <Search className="h-5 w-5" />
                  Search
                </button>

              
                 <button
                  type="button"
                  onClick={() => {
                    if (!navigator.geolocation) {
                      setLocationStatus('Geolocation is not supported in this browser.')
                      return
                    }

                    navigator.geolocation.getCurrentPosition(
                      (position) => {
                        setUserLocation({
                          latitude: position.coords.latitude,
                          longitude: position.coords.longitude,
                        })
                        setLocationStatus('Live location updated successfully.')
                      },
                      () => {
                        setLocationStatus('Unable to read your current location.')
                      },
                    )
                  }}
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-emerald-700 bg-white px-6 py-4 text-[15px] font-semibold text-emerald-700 transition hover:bg-emerald-50"
                >
                  <Navigation className="h-5 w-5" />
                  Use My Location
                </button>


              </div>

              <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="inline-flex w-fit items-center rounded-2xl border border-slate-200 bg-white p-1">
                  <button
                    type="button"
                    onClick={() => setView('list')}
                    className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                      view === 'list' ? 'bg-emerald-700 text-white' : 'text-slate-700'
                    }`}
                  >
                    List View
                  </button>
                  <button
                    type="button"
                    onClick={() => setView('map')}
                    className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                      view === 'map' ? 'bg-emerald-700 text-white' : 'text-slate-700'
                    }`}
                  >
                    <Map className="h-4 w-4" />
                    Map View
                  </button>
                </div>

             
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1120px] px-6 pb-16 pt-4 lg:px-8">
          <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p className="text-lg text-slate-600">
              Found <span className="font-semibold text-emerald-700">{filteredFacilities.length}</span> healthcare facilities near you
            </p>
            <p className="text-sm text-slate-500">{locationStatus}</p>
          </div>

          {view === 'map' && (
            <div className="mb-8">
              <RwandaMap
                facilities={filteredFacilities.length > 0 ? filteredFacilities : facilitiesWithDistance}
                userLocation={userLocation}
                highlightedFacility={nearestFacility}
              />
            </div>
          )}

          <div className="grid gap-6">
            {filteredFacilities.map((facility) => (
              <article
                key={facility.id}
                className="grid overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.07)] md:grid-cols-[350px_1fr]"
              >
                <div className="relative min-h-[280px]">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.12))]" />
                </div>

                <div className="flex flex-col justify-between gap-6 p-6 lg:p-8">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-2xl">
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                          {facility.name}
                        </h2>
                        <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                          {facility.badge}
                        </span>
                      </div>

                      <div className="mt-4 flex items-center gap-2 text-lg text-emerald-700">
                        <Building2 className="h-5 w-5" />
                        <span>{facility.type}</span>
                      </div>

                      <div className="mt-5 flex items-start gap-3 text-slate-600">
                        <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" />
                        <div>
                          <p>{facility.address}</p>
                          <p>{facility.district}, Rwanda</p>
                        </div>
                      </div>

                      <p className="mt-4 text-lg font-medium text-emerald-700">{formatDistance(facility.distanceKm)}</p>
                    </div>

                    <div className="rounded-2xl bg-amber-50 px-5 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 text-amber-500">
                        <Star className="h-5 w-5 fill-current" />
                        <span className="text-3xl font-semibold text-slate-900">{facility.rating}</span>
                      </div>
                      <p className="mt-2 text-sm text-slate-500">({facility.reviews} reviews)</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setView('map')}
                      className="rounded-2xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
                    >
                      View on Rwanda Map
                    </button>
                    <button
                      type="button"
                      className="rounded-2xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
