/*
  # Seed sample campaigns

  1. Sample Data
    - Insert sample campaigns for demonstration
*/

INSERT INTO campaigns (name, pitch, sector, funding_goal, amount_raised, progress, founder_name, founder_email) VALUES
  ('FarmAI', 'AI-powered crop optimization for African farmers', 'AgriTech', 60000, 45000, 75, 'John Okafor', 'john@farmai.com'),
  ('CleanGrid', 'Solar microgrids for rural communities', 'Clean Energy', 120000, 72000, 60, 'Sarah Mwangi', 'sarah@cleangrid.com'),
  ('MedLink', 'Telemedicine platform for underserved areas', 'HealthTech', 100000, 85000, 85, 'David Kone', 'david@medlink.com'),
  ('EduTech', 'Digital learning platform for African students', 'Education', 50000, 20000, 40, 'Amina Hassan', 'amina@edutech.com'),
  ('WaterSense', 'IoT water quality monitoring systems', 'CleanTech', 100000, 90000, 90, 'Michael Banda', 'michael@watersense.com'),
  ('PayFlow', 'Mobile payments for the unbanked', 'FinTech', 200000, 110000, 55, 'Grace Nyong', 'grace@payflow.com'),
  ('FarmMind', 'Smart irrigation systems for small farms', 'AgriTech', 50000, 15000, 30, 'Peter Mutua', 'peter@farmmind.com'),
  ('VoiceFlow', 'Voice-based interfaces for local languages', 'AI/ML', 50000, 35000, 70, 'Fatima Diallo', 'fatima@voiceflow.com'),
  ('KaziMatchAI', 'AI job matching for blue-collar workers', 'HR Tech', 50000, 22000, 45, 'James Kiprotich', 'james@kazimatch.com'),
  ('GreenCycle', 'Waste management platform for cities', 'CleanTech', 50000, 32000, 65, 'Zara Osei', 'zara@greencycle.com'),
  ('HealthBot', 'WhatsApp health assistance for rural areas', 'HealthTech', 50000, 40000, 80, 'Emmanuel Nkomo', 'emmanuel@healthbot.com'),
  ('LearnHub', 'Offline-first educational content delivery', 'Education', 50000, 17000, 35, 'Aisha Traore', 'aisha@learnhub.com')
ON CONFLICT (id) DO NOTHING;