class Trip < ApplicationRecord
  belongs_to :location
  has_many :addresses
end
