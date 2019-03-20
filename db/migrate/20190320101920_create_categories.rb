class CreateCategories < ActiveRecord::Migration[5.2]
  def self.up
    create_table :categories do |t|
      t.string :name
      t.timestamps
    end

    add_reference :posts, :category, index: true, foreign_key: true
  end

  def self.down
    remove_reference :posts, :category, index: true, foreign_key: true
    drop_table :categories
  end
end
