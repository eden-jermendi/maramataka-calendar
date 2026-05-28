// server/seeds/01_maramataka_seed.js

export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('gregorian_anchors').del();
  await knex('lunar_months').del();
  await knex('lunar_days').del();

  // Inserts seed entries for lunar_days (updated with Wiremu Tawhai adaptation via tewaioratanga.nz)
  await knex('lunar_days').insert([
    {
      id: 'day-whiro',
      order: 1,
      name_tr: 'Whiro',
      name_en: 'New Moon',
      energy_level: 'Low',
      whakatauki: 'He pō kino, he pō kōkōmuka.',
      meaning_short: 'Chillax – a good time to recharge, nurture the wairua, and fast. Stay close to whānau or friends, self reflect, plan ahead.',
      recommended: JSON.stringify(['Planning']),
      bracket: 'Whakaeke'
    },
    {
      id: 'day-tirea',
      order: 2,
      name_tr: 'Tirea',
      name_en: 'First Crescent',
      energy_level: 'Low',
      whakatauki: 'Tirea te marama, he marama hihi.',
      meaning_short: 'Make time for loved ones – go out to a movie, do something special or enjoy some downtime. Time to reflect and recharge.',
      recommended: JSON.stringify(['Planning']),
      bracket: 'Whakaeke'
    },
    {
      id: 'day-hoata',
      order: 3,
      name_tr: 'Hoata',
      name_en: 'Crescent Moon',
      energy_level: 'Medium',
      whakatauki: 'He marama hoata, he marama pai.',
      meaning_short: 'Good time to plant out seedlings and all areas of planting; seek kai knowledge to sustain whānau. Be active, keep learning.',
      recommended: JSON.stringify(['Mahi māra (Gardening/Planting)', 'Hī ika (Fishing)']),
      bracket: 'Whakaeke'
    },
    {
      id: 'day-ouenuku',
      order: 4,
      name_tr: 'Ōuenuku',
      name_en: 'Waxing Crescent',
      energy_level: 'Medium',
      whakatauki: 'Uenuku tū wae rua.',
      meaning_short: 'Make time to explore te taiao or near water. This is also a good time to connect with others, and to learn and share karakia or your pepeha.',
      recommended: JSON.stringify(['Toitoi']),
      bracket: 'Whakaeke'
    },
    {
      id: 'day-okoro',
      order: 5,
      name_tr: 'Okoro',
      name_en: 'Waxing Crescent',
      energy_level: 'Medium',
      whakatauki: 'Okoro te marama, he marama taurikura.',
      meaning_short: 'Communication and creativity is flowing. Try something new. A day to appreciate life. Spend time with whānau.',
      recommended: JSON.stringify(['Toitoi', 'Planning']),
      bracket: 'Whakaeke'
    },
    {
      id: 'day-tamatea-aio',
      order: 6,
      name_tr: 'Tamatea-āio',
      name_en: 'First Quarter',
      energy_level: 'Low',
      whakatauki: 'Tamatea aio, he marama marire.',
      meaning_short: 'Time to be cautious – the unpredictable can happen. Avoid hui at this time. Stay close to whānau. Take notice.',
      recommended: JSON.stringify(['Planning']),
      bracket: 'Whakaeke'
    },
    {
      id: 'day-tamatea-angana',
      order: 7,
      name_tr: 'Tamatea-angana',
      name_en: 'First Quarter',
      energy_level: 'Low',
      whakatauki: 'Tamatea ngana, he marama tūpato.',
      meaning_short: 'Tamatea phase as above. A time to be cautious, avoid hui and offer your support to whānau or those who need your tautoko.',
      recommended: JSON.stringify(['Planning']),
      bracket: 'Whakaeke'
    },
    {
      id: 'day-tamatea-kai-ariki',
      order: 8,
      name_tr: 'Tamatea-kai-ariki',
      name_en: 'Waxing Gibbous',
      energy_level: 'Low',
      whakatauki: 'Tamatea kai ariki, he marama kaha.',
      meaning_short: 'Tamatea phase as above. A time to be cautious, avoid hui and offer your support to whānau or those who need your tautoko.',
      recommended: JSON.stringify(['Planning']),
      bracket: 'Whakaeke'
    },
    {
      id: 'day-tamatea-tuhaha',
      order: 9,
      name_tr: 'Tamatea Tūhāhā',
      name_en: 'Waxing Gibbous',
      energy_level: 'Low',
      whakatauki: 'Tamatea tuhaha, he marama tūpato.',
      meaning_short: 'Be cautious. Unpredictable time. A good time for taking notice, keeping learning and giving back.',
      recommended: JSON.stringify(['Planning']),
      bracket: 'Mōteatea'
    },
    {
      id: 'day-ariroa',
      order: 10,
      name_tr: 'Ariroa',
      name_en: 'Waxing Gibbous',
      energy_level: 'Low',
      whakatauki: 'Ari te marama, he rā mokemoke.',
      meaning_short: 'An unproductive time, bringing opportunities to be still, reflect and take notice. Be cautious, and look for ways to keep learning.',
      recommended: JSON.stringify(['Planning']),
      bracket: 'Mōteatea'
    },
    {
      id: 'day-huna',
      order: 11,
      name_tr: 'Huna',
      name_en: 'Waxing Gibbous',
      energy_level: 'Low',
      whakatauki: 'He rā huna, he rā pōkē.',
      meaning_short: 'Giveback day for tangaroa. A good time for self care, nourishing your hinengaro, wairua, and tinana.',
      recommended: JSON.stringify(['Planning']),
      bracket: 'Mōteatea'
    },
    {
      id: 'day-mawharu',
      order: 12,
      name_tr: 'Māwharu',
      name_en: 'Waxing Gibbous',
      energy_level: 'High',
      whakatauki: 'Mawharu te marama, he rā tupu.',
      meaning_short: 'Use your energy in productive ways that will bring great results for you in the future. Be active. Take notice.',
      recommended: JSON.stringify(['Mahi māra (Gardening/Planting)', 'Harvesting']),
      bracket: 'Mōteatea'
    },
    {
      id: 'day-ohua',
      order: 13,
      name_tr: 'Ōhua',
      name_en: 'Waxing Gibbous',
      energy_level: 'Low',
      whakatauki: 'Ohua te marama, he rā hua.',
      meaning_short: 'Reflect, retract and stay close to whānau. A good time for learning, taking notice, being present and planning for the future.',
      recommended: JSON.stringify(['Planning']),
      bracket: 'Poi'
    },
    {
      id: 'day-atua-whakahaehae',
      order: 14,
      name_tr: 'Atua Whakahaehae',
      name_en: 'Waxing Gibbous',
      energy_level: 'Medium',
      whakatauki: 'Atua whakahaehae, he rā āio.',
      meaning_short: 'A good day for being mindful, taking notice of the world around us and reducing the harm towards our natural environment.',
      recommended: JSON.stringify(['Planning']),
      bracket: 'Poi'
    },
    {
      id: 'day-turu',
      order: 15,
      name_tr: 'Turu',
      name_en: 'Full Moon',
      energy_level: 'High',
      whakatauki: 'Oturu te marama, he rā tōtara.',
      meaning_short: 'Great time to plan for the times ahead. Make the most of this high productivity time. Be active, support others where you can.',
      recommended: JSON.stringify(['Planning', 'Harvesting']),
      bracket: 'Poi'
    },
    {
      id: 'day-te-rakaunui',
      order: 16,
      name_tr: 'Te Rākaunui',
      name_en: 'Full Moon',
      energy_level: 'High',
      whakatauki: 'Rakaunui te marama, he rā mānene.',
      meaning_short: 'A good time to be productive or active, set short term goals, have people over or plan a special occasion.',
      recommended: JSON.stringify(['Hī ika (Fishing)', 'Harvesting']),
      bracket: 'Poi'
    },
    {
      id: 'day-rakaumatohi',
      order: 17,
      name_tr: 'Rākaumatohi',
      name_en: 'Waning Gibbous',
      energy_level: 'High',
      whakatauki: 'Moea tō poi, moea tō taiaha.',
      meaning_short: 'A productive day for completing mahi, getting things done and starting new projects. Be active or connect with whānau.',
      recommended: JSON.stringify(['Hī ika (Fishing)', 'Harvesting']),
      bracket: 'Poi'
    },
    {
      id: 'day-takirau',
      order: 18,
      name_tr: 'Takirau',
      name_en: 'Waning Gibbous',
      energy_level: 'Medium',
      whakatauki: 'Takirau te marama, he rā heke.',
      meaning_short: 'Slow down, relax, rest, renew. Take notice. A good day for strategic planning. Find time to connect with te taiao (nature).',
      recommended: JSON.stringify(['Harvesting', 'Toitoi']),
      bracket: 'Poi'
    },
    {
      id: 'day-oike',
      order: 19,
      name_tr: 'Oike',
      name_en: 'Waning Gibbous',
      energy_level: 'Medium',
      whakatauki: 'Oike te marama, he rā whakatā.',
      meaning_short: 'Rest to maximise time ahead. Be mindful, notice the world around you, and manage your time. Come up with ways to give back.',
      recommended: JSON.stringify(['Toitoi', 'Planning']),
      bracket: 'Haka'
    },
    {
      id: 'day-korekore-tuatahi',
      order: 20,
      name_tr: 'Korekore Tuatahi',
      name_en: 'Waning Gibbous',
      energy_level: 'Low',
      whakatauki: 'Korekore te whiawhia, he rā kore.',
      meaning_short: 'Good time to rest, fast, spend time with whānau, support those in need, be creative and practise mindfulness, nohopuku.',
      recommended: JSON.stringify(['Planning']),
      bracket: 'Haka'
    },
    {
      id: 'day-korekore-rawea',
      order: 21,
      name_tr: 'Korekore Rawea',
      name_en: 'Last Quarter',
      energy_level: 'Low',
      whakatauki: 'Korekore te rawea, he rā āio.',
      meaning_short: 'Good time to rest, fast, spend time with whānau, support those in need, be creative and practise mindfulness, nohopuku.',
      recommended: JSON.stringify(['Planning']),
      bracket: 'Haka'
    },
    {
      id: 'day-korekore-whakapiri',
      order: 22,
      name_tr: 'Korekore Whakapiri',
      name_en: 'Waning Crescent',
      energy_level: 'Low',
      whakatauki: 'Korekore piri ki te tangaroa, he rā piri.',
      meaning_short: 'Good time for wānanga, creativity, planning ahead, and being close to Tangaroa. Observe the sea and its healing energy.',
      recommended: JSON.stringify(['Toitoi', 'Planning']),
      bracket: 'Haka'
    },
    {
      id: 'day-tangaroa-a-mua',
      order: 23,
      name_tr: 'Tangaroa-ā-mua',
      name_en: 'Waning Crescent',
      energy_level: 'Medium',
      whakatauki: 'Tangaroa amua, he rā hī.',
      meaning_short: 'An ideal time for team events or for doing things with your whānau, friends and community. Kōrero, connect and share ideas.',
      recommended: JSON.stringify(['Toitoi', 'Hī ika (Fishing)']),
      bracket: 'Haka'
    },
    {
      id: 'day-tangaroa-a-roto',
      order: 24,
      name_tr: 'Tangaroa-ā-roto',
      name_en: 'Waning Crescent',
      energy_level: 'High',
      whakatauki: 'Tangaroa aroto, he rā ika.',
      meaning_short: 'A great phase for fishing, water activities and romiromi (massage). Be sure to drink lots of water to stay hydrated.',
      recommended: JSON.stringify(['Hī ika (Fishing)', 'Harvesting']),
      bracket: 'Haka'
    },
    {
      id: 'day-tangaroa-whakapau',
      order: 25,
      name_tr: 'Tangaroa-whakapau',
      name_en: 'Waning Crescent',
      energy_level: 'High',
      whakatauki: 'Tangaroa ki te oho, he rā whakaoho.',
      meaning_short: 'A great time to get the creative juices flowing, challenge yourself physically, or enjoy your favourite water activities.',
      recommended: JSON.stringify(['Hī ika (Fishing)', 'Harvesting']),
      bracket: 'Whakawātea'
    },
    {
      id: 'day-tangaroa-whariki-kiokio',
      order: 26,
      name_tr: 'Tangaroa Whāriki Kiokio',
      name_en: 'Waning Crescent',
      energy_level: 'High',
      whakatauki: 'He rā whakawātea.',
      meaning_short: 'Surging energy. Make the most of these productive times. Be active, take notice and find ways to give back.',
      recommended: JSON.stringify(['Hī ika (Fishing)', 'Harvesting']),
      bracket: 'Whakawātea'
    },
    {
      id: 'day-otane',
      order: 27,
      name_tr: 'Ōtāne',
      name_en: 'Waning Crescent',
      energy_level: 'High',
      whakatauki: 'Otane te marama, he rā rākau.',
      meaning_short: 'A time to be productive and ask for help if you need it. Make time to get out in te taiao and give back to Tāne-mahuta.',
      recommended: JSON.stringify(['Mahi māra (Gardening/Planting)', 'Harvesting']),
      bracket: 'Whakawātea'
    },
    {
      id: 'day-orongonui',
      order: 28,
      name_tr: 'Ōrongonui',
      name_en: 'Waning Crescent',
      energy_level: 'High',
      whakatauki: 'Orongonui te marama, he rā tupu.',
      meaning_short: 'Productive time physically and emotionally. Personal development and positive vibes are apparent at this time.',
      recommended: JSON.stringify(['Mahi māra (Gardening/Planting)', 'Harvesting']),
      bracket: 'Whakawātea'
    },
    {
      id: 'day-omutu',
      order: 29,
      name_tr: 'Ōmutu',
      name_en: 'Waning Crescent',
      energy_level: 'High',
      whakatauki: 'Omutu te marama, he rā mutu.',
      meaning_short: 'Energy is slowing. A good time for karakia, whakapapa, resting, fasting or planning for the time ahead. Recharge. Be mindful.',
      recommended: JSON.stringify(['Planning', 'Harvesting']),
      bracket: 'Whakawātea'
    },
    {
      id: 'day-mutuwhenua',
      order: 30,
      name_tr: 'Mutuwhenua',
      name_en: 'Dark Moon',
      energy_level: 'Medium',
      whakatauki: 'Mutuwhenua te marama, he pō tamatea.',
      meaning_short: 'Give yourself a treat, mirimiri or hair cut – something you can enjoy. Nurture your wairua, tinana, hinegaro and whānau.',
      recommended: JSON.stringify(['Planning']),
      bracket: 'Whakawātea'
    }
  ]);

  // Inserts seed entries for ALL lunar_months (combining 2024-2026 historical and 2026-2027 new lunar years)
  await knex('lunar_months').insert([
    // 2024-2026 Month list
    { id: 'month-pipiri', name_tr: 'Pipiri', name_en: 'June cycle' },
    { id: 'month-hongongoi', name_tr: 'Hōngongoi / Takurua', name_en: 'July cycle' },
    { id: 'month-hereturikoka', name_tr: 'Here-turi-kōkā / Here o Pipiri', name_en: 'August cycle' },
    { id: 'month-mahuru', name_tr: 'Mahuru', name_en: 'September cycle' },
    { id: 'month-whiringaanuku', name_tr: 'Whiringa-ā-nuku / Kōpū', name_en: 'October cycle' },
    { id: 'month-whiringaarangi', name_tr: 'Whiringa-ā-rangi / Whitiānaunau', name_en: 'November cycle' },
    { id: 'month-hakihea', name_tr: 'Hakihea', name_en: 'December cycle' },
    { id: 'month-kohitatea', name_tr: 'Kohitātea', name_en: 'January cycle' },
    { id: 'month-huitanguru', name_tr: 'Hui-tanguru', name_en: 'February cycle' },
    { id: 'month-poututerangi', name_tr: 'Poutū-te-rangi', name_en: 'March cycle' },
    { id: 'month-paengawhawha', name_tr: 'Paenga-whāwhā', name_en: 'April cycle' },
    { id: 'month-haratua', name_tr: 'Haratua', name_en: 'May cycle' },

    // 2026-2027 Month list
    { id: 'hune_2026', name_tr: 'Hune', name_en: 'June' },
    { id: 'hurae_2026', name_tr: 'Hūrae', name_en: 'July' },
    { id: 'akuhata_2026', name_tr: 'Ākuhata', name_en: 'August' },
    { id: 'hepetema_2026', name_tr: 'Hepetema', name_en: 'September' },
    { id: 'oketopa_2026', name_tr: 'Oketopa', name_en: 'October' },
    { id: 'noema_2026', name_tr: 'Noema', name_en: 'November' },
    { id: 'tihema_2026', name_tr: 'Tihema', name_en: 'December' },
    { id: 'hanuere_2027', name_tr: 'Hānuere', name_en: 'January' },
    { id: 'pepuere_2027', name_tr: 'Pēpuere', name_en: 'February' },
    { id: 'mahe_2027', name_tr: 'Māhe', name_en: 'March' },
    { id: 'aperira_2027', name_tr: 'Āperira', name_en: 'April' },
    { id: 'mei_2027', name_tr: 'Mei', name_en: 'May' }
  ]);

  // Inserts seed entries for ALL gregorian_anchors (2024 to 2027 complete cycles)
  await knex('gregorian_anchors').insert([
    // 2024 Cycle
    { lunar_month_id: 'month-pipiri', gregorian_start_date: '2024-06-07', year: 2024 },
    { lunar_month_id: 'month-hongongoi', gregorian_start_date: '2024-07-06', year: 2024 },
    { lunar_month_id: 'month-hereturikoka', gregorian_start_date: '2024-08-04', year: 2024 },
    { lunar_month_id: 'month-mahuru', gregorian_start_date: '2024-09-03', year: 2024 },
    { lunar_month_id: 'month-whiringaanuku', gregorian_start_date: '2024-10-02', year: 2024 },
    { lunar_month_id: 'month-whiringaarangi', gregorian_start_date: '2024-11-01', year: 2024 },
    { lunar_month_id: 'month-hakihea', gregorian_start_date: '2024-11-30', year: 2024 },
    { lunar_month_id: 'month-kohitatea', gregorian_start_date: '2024-12-31', year: 2024 },
    { lunar_month_id: 'month-huitanguru', gregorian_start_date: '2025-01-29', year: 2025 },
    { lunar_month_id: 'month-poututerangi', gregorian_start_date: '2025-02-28', year: 2025 },
    { lunar_month_id: 'month-paengawhawha', gregorian_start_date: '2025-03-30', year: 2025 },
    { lunar_month_id: 'month-haratua', gregorian_start_date: '2025-04-28', year: 2025 },
    
    // 2025-2026 Cycle
    { lunar_month_id: 'month-pipiri', gregorian_start_date: '2025-05-27', year: 2025 },
    { lunar_month_id: 'month-hongongoi', gregorian_start_date: '2025-06-25', year: 2025 },
    { lunar_month_id: 'month-hereturikoka', gregorian_start_date: '2025-07-25', year: 2025 },
    { lunar_month_id: 'month-mahuru', gregorian_start_date: '2025-08-23', year: 2025 },
    { lunar_month_id: 'month-whiringaanuku', gregorian_start_date: '2025-09-22', year: 2025 },
    { lunar_month_id: 'month-whiringaarangi', gregorian_start_date: '2025-10-22', year: 2025 },
    { lunar_month_id: 'month-hakihea', gregorian_start_date: '2025-11-20', year: 2025 },
    { lunar_month_id: 'month-kohitatea', gregorian_start_date: '2025-12-20', year: 2025 },
    { lunar_month_id: 'month-huitanguru', gregorian_start_date: '2026-01-19', year: 2026 },
    { lunar_month_id: 'month-poututerangi', gregorian_start_date: '2026-02-18', year: 2026 },
    { lunar_month_id: 'month-paengawhawha', gregorian_start_date: '2026-03-19', year: 2026 },
    { lunar_month_id: 'month-haratua', gregorian_start_date: '2026-04-17', year: 2026 },

    // 2026-2027 Cycle
    { lunar_month_id: 'hune_2026', gregorian_start_date: '2026-05-16', year: 2026 },
    { lunar_month_id: 'hurae_2026', gregorian_start_date: '2026-06-15', year: 2026 },
    { lunar_month_id: 'akuhata_2026', gregorian_start_date: '2026-07-14', year: 2026 },
    { lunar_month_id: 'hepetema_2026', gregorian_start_date: '2026-08-13', year: 2026 },
    { lunar_month_id: 'oketopa_2026', gregorian_start_date: '2026-09-11', year: 2026 },
    { lunar_month_id: 'noema_2026', gregorian_start_date: '2026-10-11', year: 2026 },
    { lunar_month_id: 'tihema_2026', gregorian_start_date: '2026-11-09', year: 2026 },
    { lunar_month_id: 'hanuere_2027', gregorian_start_date: '2026-12-09', year: 2026 },
    { lunar_month_id: 'pepuere_2027', gregorian_start_date: '2027-01-08', year: 2027 },
    { lunar_month_id: 'mahe_2027', gregorian_start_date: '2027-02-07', year: 2027 },
    { lunar_month_id: 'aperira_2027', gregorian_start_date: '2027-03-08', year: 2027 },
    { lunar_month_id: 'mei_2027', gregorian_start_date: '2027-04-07', year: 2027 },
    // Transition anchor to allow proper month length calculation of the final month (Mei 2027)
    { lunar_month_id: 'mei_2027', gregorian_start_date: '2027-05-06', year: 2027 }
  ]);
}
