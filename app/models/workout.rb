class Workout < ApplicationRecord
  belongs_to :user
  has_many :images, dependent: :destroy
end
