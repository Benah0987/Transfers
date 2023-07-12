class Player < ApplicationRecord
  belongs_to :current_team, class_name: 'Team', optional: true
  has_many :transfers
end
