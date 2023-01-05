class CreateLikes < ActiveRecord::Migration[6.1]
  def change
    create_table :likes do |t|
      t.belongs_to :user, foregin_key: true
      t.belongs_to :idea, foregin_key: true

      t.timestamps
    end
  end
end
