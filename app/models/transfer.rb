class Transfer < ApplicationRecord
  belongs_to :player
  belongs_to :transfer_team, class_name: 'Team'
end
