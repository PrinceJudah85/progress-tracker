class AddImageToWorkouts < ActiveRecord::Migration[6.0]
  def change
    add_column :workouts, :image_url, :text
  end
end
