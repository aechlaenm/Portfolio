import tankVideo from '@/assets/videos/TankSystem.mp4'
import heliVideo1 from '@/assets/videos/HeliSystem1.mp4'
import heliVideo2 from '@/assets/videos/HeliSystem2.mp4'
import vehicleVideo from '@/assets/videos/vehicleSystem.mp4'
import pikapikaVideo from '@/assets/videos/PikaPikaSystem.mp4'

export const projects = [
  {
    id: 'tank-sys',
    title: 'Tank System',
    description: 'An advanced tank system featuring mathematically generated dynamic tracks, a fully integrated suspension system, and a streamlined driving mechanism.',
    tags: ['Roblox', 'Physics', 'Vehicles'],
    media: [
      { type: 'video', src: tankVideo }
    ]
  },
  {
    id: 'heli-sys',
    title: 'Helicopter System',
    description: 'A helicopter system built in Roblox using body movers and world gravity, featuring an integrated weapon system and flight control system.',
    tags: ['Roblox', 'Physics', 'Vehicles'],
    media: [
      { type: 'video', src: heliVideo1 },
      { type: 'video', src: heliVideo2 }
    ]
  },
  {
    id: 'vehi-sys',
    title: 'Vehicle System',
    description: 'A vehicle system built with simple CylinderConstraints, featuring suspension, a basic driving system, and an automatic flip mechanism.',
    tags: ['Roblox', 'Physics', 'Vehicles'],
    media: [
      { type: 'video', src: vehicleVideo }
    ]
  },
    {
    id: 'pika-sys',
    title: 'Pika Pika Fruit',
    description: 'The Pika Pika Fruit currently offers three skills. The first is Light Kick, which launches a light-infused projectile forward to damage humanoids. The second is Light Jewel, a rapid-fire technique that spreads multiple light projectiles forward. The third is Light Flight, allowing the user to transform into light and travel freely across any distance.',
    tags: ['Roblox', 'Skill', 'Combat'],
    media: [
      { type: 'video', src: pikapikaVideo }
    ]
  },
]
