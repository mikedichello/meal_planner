class CreateMeals < ActiveRecord::Migration[6.0]
  def change
    create_table :meals do |t|
      t.string :name
      t.string :description
      t.string :ingredients
      t.integer :calories
      t.integer :carbs_g
      t.integer :fat_g
      t.integer :protein_g

      t.timestamps
    end
  end
end
