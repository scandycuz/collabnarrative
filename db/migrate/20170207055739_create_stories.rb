class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
      t.string :title, unique: true, index: true
      t.timestamps null: false
    end
  end
end
