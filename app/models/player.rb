class Player < ApplicationRecord
  belongs_to :team, optional: true
  has_many :transfers
end
