class CreateLikes < ActiveRecord::Migration[5.1]
  def change
    	create_table :likes do |t|
  		t.belongs_to :name, index:true
  		t.integer :like_id
    end
    add_index :likes, :like_id
    add_foreign_key :likes, :names
  end
end
