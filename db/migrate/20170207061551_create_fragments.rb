class CreateFragments < ActiveRecord::Migration
  def change
    create_table :fragments do |t|
      t.text :body
      t.integer :story_id, index: true
      t.integer :user_id, index: true
      t.timestamps null: false
    end
  end
end
