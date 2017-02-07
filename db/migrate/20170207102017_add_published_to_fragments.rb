class AddPublishedToFragments < ActiveRecord::Migration
  def change
    add_column :fragments, :published, :boolean, :default => false
  end
end
