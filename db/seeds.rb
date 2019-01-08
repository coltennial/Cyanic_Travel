10.times do
  l = Location.create(
    name: "Location Name",
    days: 1234567890,
  )
  10.times do
    t = l.trips.create(
      name: "Trip Name",
      start_date: Date.new(2019, 01, 01),
      end_date: Date.new(2019, 02, 01),
    )
    10.times do 
      t.addresses.create(
        street: "Street Name",
        city: "City Name",
        state: "State Name",
        zip: 12345,
      )
    end
  end
end

print `clear`
puts "Data SEEDED"