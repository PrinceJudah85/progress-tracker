class AddExerciseToWorkout < ActiveRecord::Migration[6.0]
  def change
    add_column :workouts, :exercise, :string
  end
end
