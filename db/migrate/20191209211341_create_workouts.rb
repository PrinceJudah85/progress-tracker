class CreateWorkouts < ActiveRecord::Migration[6.0]
  def change
    create_table :workouts do |t|
      t.string :title
      t.string :content
      t.date :date
      t.integer :set_count
      t.integer :rep_count
      t.integer :duration
      t.integer :weight_count
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
